import { useAuth } from "@hooks/useAuth";
import { useNavigation } from "@react-navigation/native";

import { Container, Message, Name } from "./styles";

import { Background } from "@components/ui/Background";
import { Header } from "@components/header";
import { Button } from "@components/ui/Button";

import type { AppDrawerModel } from "@models/AppRoutesModel";

export default function Profile() {
  const { signOut, user } = useAuth();

  const navigation = useNavigation<AppDrawerModel>();

  return (
    <Background>
      <Header title="Meu perfil" />

      <Container>
        <Message>Hey, bem vindo de volta!</Message>

        <Name>{user?.name}</Name>

        <Button onPress={() => navigation.navigate("new")}>
          Fazer registro
        </Button>

        <Button onPress={signOut} variant="logout">
          Sair
        </Button>
      </Container>
    </Background>
  );
}
