import { createContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Alert } from "react-native";

import { authUserService, createUserService } from "@services/authService";

interface AuthContextProps {
  signed: boolean;
  isLoading: boolean;
  isLoadingAuth: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export default function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigation();

  const [isLoadingAuth, setIsLoadingAuth] = useState(false);

  async function signIn(email: string, password: string): Promise<void> {
    const user = await authUserService(email, password);
    console.log(user);
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
      console.log(error);
      Alert.alert("Erro ao cadastrar usuário!");
    } finally {
      setIsLoadingAuth(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signed: false,
        isLoading: false,
        isLoadingAuth,
        signIn,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
