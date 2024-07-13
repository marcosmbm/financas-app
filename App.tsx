import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "react-native";

import Routes from "@routes/index";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#f0f4ff"} barStyle={"dark-content"} />
      <Routes />
    </NavigationContainer>
  );
}
