import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "@screens/auth/signIn";
import SignUp from "@screens/auth/signUp";

import type { AuthStackParamListModel } from "@models/AuthRoutesModel";
import { config } from "src/styles/config";

const Stack = createNativeStackNavigator<AuthStackParamListModel>();

export default function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="signIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signUp"
        component={SignUp}
        options={{
          headerStyle: {
            backgroundColor: config.colors.blue,
          },
          headerTintColor: config.colors.white,
          headerTitle: "Voltar",
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
