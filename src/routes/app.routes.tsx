import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "@screens/home";

const Drawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="home" component={Home} />
    </Drawer.Navigator>
  );
}
