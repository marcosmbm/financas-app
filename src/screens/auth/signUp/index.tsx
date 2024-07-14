import { useState } from "react";
import { useAuth } from "@hooks/useAuth";

import { Platform, Alert } from "react-native";
import { Container, Content } from "../signIn/styles";

import { Background } from "@components/ui/Background";
import { Input, AreaInput } from "@components/ui/Input";
import { SubmitButton, SubmitButtonText } from "@components/ui/Button";

export default function SignUp() {
  const { signUp, isLoadingAuth } = useAuth();

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  async function handleSignUp() {
    const name = inputName.trim();
    const email = inputEmail.trim();
    const password = inputPassword.trim();

    if (name === "" || email === "" || password === "") {
      Alert.alert("Preencha todos os campos!");
      return;
    }

    await signUp(name, email, password);
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled
      >
        <Content>
          <AreaInput>
            <Input
              placeholder="Seu nome"
              value={inputName}
              onChangeText={(value) => setInputName(value)}
            />
          </AreaInput>

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

          <SubmitButton onPress={handleSignUp} disabled={isLoadingAuth}>
            <SubmitButtonText>Cadastrar</SubmitButtonText>
          </SubmitButton>
        </Content>
      </Container>
    </Background>
  );
}
