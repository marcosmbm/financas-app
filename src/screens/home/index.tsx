import { useAuth } from "@hooks/useAuth";
import { View, Text, Button } from "react-native";

import { Background } from "@components/ui/Background";
import { Header } from "@components/header";

export default function Home() {
  const { signOut } = useAuth();
  return (
    <Background>
      <Header title="Minhas movimentações" />
      <Text>Home</Text>

      <Button title="Deslogar" onPress={() => signOut()} />
    </Background>
  );
}
