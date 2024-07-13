import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AuthStackParamListModel = {
  signIn: undefined;
  signUp: undefined;
};

export type AuthStackModel = NativeStackNavigationProp<AuthStackParamListModel>;
