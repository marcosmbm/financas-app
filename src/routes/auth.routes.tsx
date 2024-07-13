import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "@screens/auth/signIn";
import SignUp from "@screens/auth/signUp";

const Stack = createNativeStackNavigator();

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
      <Stack.Screen name="signUp" component={SignUp} />
    </Stack.Navigator>
  );
}
