import { useNavigation } from "@react-navigation/native";

import { Platform } from "react-native";
import { Container, Content } from "./styles";

import { Background } from "@components/ui/Background";
import { Logo } from "@components/ui/Logo";
import { Input, AreaInput } from "@components/ui/Input";
import { Button } from "@components/ui/Button";

import type { AuthStackModel } from "@models/AuthRoutesModel";

export default function SignIn() {
  const navigation = useNavigation<AuthStackModel>();

  function onNavigate() {
    navigation.navigate("signUp");
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled
      >
        <Logo />

        <Content>
          <AreaInput>
            <Input placeholder="Seu email" keyboardType="email-address" />
          </AreaInput>

          <AreaInput>
            <Input placeholder="Sua senha" secureTextEntry />
          </AreaInput>

          <Button>Acessar</Button>

          <Button onPress={onNavigate} variant="link">
            Criar conta gratuita
          </Button>
        </Content>
      </Container>
    </Background>
  );
}
