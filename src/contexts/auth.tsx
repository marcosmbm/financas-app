import { createContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { Alert } from "react-native";

import {
  authUserService,
  createUserService,
  userDetailService,
} from "@services/authService";

import { getErrorMessage } from "@utils/errorMessage";
import { saveItem, getItem, removeItem } from "@utils/asyncStorageService";

import api from "@services/api";

import type { UserModel } from "@models/UserModel";
interface AuthContextProps {
  signed: boolean;
  user: UserModel | null;
  isLoading: boolean;
  isLoadingAuth: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export default function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigation();

  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserModel | null>(null);

  useEffect(() => {
    async function loadStorage() {
      try {
        const tokenStorage = await getItem("@finToken");

        if (tokenStorage) {
          const { id, name, email, balance } =
            await userDetailService(tokenStorage);
          setUser({ id, name, email, balance, token: tokenStorage });

          api.defaults.headers.Authorization = `Bearer ${tokenStorage}`;
        }
      } catch (error) {
        console.log(error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    }
    loadStorage();
  }, []);

  async function signIn(email: string, password: string): Promise<void> {
    try {
      setIsLoadingAuth(true);
      const { id, name, token } = await authUserService(email, password);

      await saveItem(token, "@finToken");

      setUser({
        id: id,
        name,
        token,
        email,
        balance: 0,
      });
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      Alert.alert(errorMessage);
    } finally {
      setIsLoadingAuth(false);
    }
  }

  async function signUp(
    name: string,
    email: string,
    password: string,
  ): Promise<void> {
    try {
      setIsLoadingAuth(true);
      await createUserService(name, email, password);
      navigate.goBack();
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      Alert.alert(errorMessage);
    } finally {
      setIsLoadingAuth(false);
    }
  }

  async function signOut() {
    try {
      await removeItem("finToken");
      setUser(null);
    } catch (error) {
      Alert.alert("Erro ao deslogar");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        isLoading,
        isLoadingAuth,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
