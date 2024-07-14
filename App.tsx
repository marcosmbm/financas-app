import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from "src/contexts/auth";

import { StatusBar } from "react-native";

import Routes from "@routes/index";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor={"#f0f4ff"} barStyle={"dark-content"} />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
