import type { DrawerNavigationProp } from "@react-navigation/drawer";

export type AppDrawerParamListModel = {
  home: undefined;
  new: undefined;
  profile: undefined;
};

export type AppDrawerModel = DrawerNavigationProp<AppDrawerParamListModel>;
