import { useNavigation } from "@react-navigation/native";

import { Platform } from "react-native";
import { Container, Content } from "./styles";

import { Background } from "@components/ui/Background";
import { Logo } from "@components/ui/logo";
import { Input, AreaInput } from "@components/ui/Input";
import {
  SubmitButton,
  SubmitButtonText,
  Link,
  LinkText,
} from "@components/ui/Button";

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

          <SubmitButton>
            <SubmitButtonText>Acessar</SubmitButtonText>
          </SubmitButton>

          <Link onPress={onNavigate}>
            <LinkText>Criar conta gratuita</LinkText>
          </Link>
        </Content>
      </Container>
    </Background>
  );
}
