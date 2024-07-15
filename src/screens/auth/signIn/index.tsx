import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@hooks/useAuth";

import { Alert, Platform } from "react-native";
import { Container, Content } from "./styles";

import { Background } from "@components/ui/Background";
import { Logo } from "@components/ui/Logo";
import { Input, AreaInput } from "@components/ui/Input";
import { Button } from "@components/ui/Button";

import type { AuthStackModel } from "@models/AuthRoutesModel";

export default function SignIn() {
  const navigation = useNavigation<AuthStackModel>();

  const { isLoadingAuth, signIn } = useAuth();

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  function onNavigate() {
    navigation.navigate("signUp");
  }

  async function handleLogin() {
    const email = inputEmail.trim();
    const password = inputPassword.trim();

    if (email === "" || password === "") {
      Alert.alert("Preencha todos os campos!");
      return;
    }

    await signIn(email, password);
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
            <Input
              placeholder="Seu email"
              keyboardType="email-address"
              value={inputEmail}
              onChangeText={(value) => setInputEmail(value)}
            />
          </AreaInput>

          <AreaInput>
            <Input
              placeholder="Sua senha"
              secureTextEntry
              value={inputPassword}
              onChangeText={(value) => setInputPassword(value)}
            />
          </AreaInput>

          <Button isLoading={isLoadingAuth} onPress={handleLogin}>
            Acessar
          </Button>

          <Button onPress={onNavigate} variant="link">
            Criar conta gratuita
          </Button>
        </Content>
      </Container>
    </Background>
  );
}
