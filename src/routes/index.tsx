import { useAuth } from "@hooks/useAuth";
import { View, ActivityIndicator } from "react-native";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

export default function Routes() {
  const { isLoading, signed } = useAuth();

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
