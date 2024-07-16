import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "@screens/home";
import { config } from "src/styles/config";

const Drawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: config.colors.white, paddingTop: 20 },
        drawerActiveBackgroundColor: config.colors.blue,
        drawerActiveTintColor: config.colors.white,
        drawerInactiveBackgroundColor: config.colors.primary_color,
        drawerInactiveTintColor: config.colors.black,
      }}
    >
      <Drawer.Screen name="home" component={Home} />
    </Drawer.Navigator>
  );
}
