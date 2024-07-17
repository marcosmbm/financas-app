import { ActivityIndicator, View } from "react-native";
import { Background } from "@components/ui/Background";
import { config } from "src/styles/config";

export function Loader() {
  return (
    <Background>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator color={config.colors.blue} size={"large"} />
      </View>
    </Background>
  );
}
