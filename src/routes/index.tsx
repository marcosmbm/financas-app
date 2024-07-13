import { View, ActivityIndicator } from "react-native";

import AuthRoutes from "./auth.routes";

export default function Routes() {
  const isLoading = false;
  const signed = false;

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return signed ? <></> : <AuthRoutes />;
}
