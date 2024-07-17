import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "@screens/home";
import New from "@screens/new";
import Profile from "@screens/profile";

import { CustomDrawer } from "@components/customDrawer";

import { config } from "src/styles/config";

import type { AppDrawerParamListModel } from "@models/AppRoutesModel";

const Drawer = createDrawerNavigator<AppDrawerParamListModel>();

export default function AppRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: config.colors.white, paddingTop: 20 },
        drawerActiveBackgroundColor: config.colors.blue,
        drawerActiveTintColor: config.colors.white,
        drawerInactiveBackgroundColor: config.colors.primary_color,
        drawerInactiveTintColor: config.colors.black,
      }}
    >
      <Drawer.Screen name="home" component={Home} options={{ title: "Home" }} />

      <Drawer.Screen
        name="new"
        component={New}
        options={{ title: "Registrar" }}
      />

      <Drawer.Screen
        name="profile"
        component={Profile}
        options={{ title: "Meu perfil" }}
      />
    </Drawer.Navigator>
  );
}
