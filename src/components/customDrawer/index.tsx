import { useAuth } from "@hooks/useAuth";

import { View, Text } from "react-native";
import { Logo } from "@components/ui/Logo";

import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerItem,
  type DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { config } from "src/styles/config";

export function CustomDrawer(props: DrawerContentComponentProps) {
  const { user, signOut } = useAuth();

  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 25,
          marginBottom: 25,
        }}
      >
        <Logo style={{ width: 90, height: 90 }} />

        <Text
          style={{
            fontSize: 18,
            color: config.colors.black,
            fontWeight: "bold",
            marginTop: 14,
          }}
        >
          Bem-vindo(a)
        </Text>

        <Text
          style={{ fontSize: 18, color: config.colors.black, marginTop: 14 }}
          numberOfLines={1}
        >
          {user?.name}
        </Text>
      </View>

      <DrawerItemList {...props} />

      <DrawerItem
        {...props}
        label={"Sair"}
        onPress={() => signOut()}
        style={{ borderWidth: 1, borderColor: config.colors.red }}
        labelStyle={{ color: config.colors.red, fontWeight: "bold" }}
      />
    </DrawerContentScrollView>
  );
}
