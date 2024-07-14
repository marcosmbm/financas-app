import { Platform } from "react-native";
import { Container, Content } from "../signIn/styles";

import { Background } from "@components/ui/Background";
import { Input, AreaInput } from "@components/ui/Input";
import { SubmitButton, SubmitButtonText } from "@components/ui/Button";

export default function SignUp() {
  return (
    <Background>
      <Container
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled
      >
        <Content>
          <AreaInput>
            <Input placeholder="Seu nome" />
          </AreaInput>

          <AreaInput>
            <Input placeholder="Seu email" keyboardType="email-address" />
          </AreaInput>

          <AreaInput>
            <Input placeholder="Sua senha" secureTextEntry />
          </AreaInput>

          <SubmitButton>
            <SubmitButtonText>Cadastrar</SubmitButtonText>
          </SubmitButton>
        </Content>
      </Container>
    </Background>
  );
}
