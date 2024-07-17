import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Alert, Keyboard } from "react-native";
import { Container } from "./styles";

import { Background } from "@components/ui/Background";
import { Header } from "@components/header";
import { AreaInput, Input } from "@components/ui/Input";
import { Button } from "@components/ui/Button";
import { KeyboardDismissContainer } from "@components/keyboardDismissContainer";
import { RegisterTypes } from "@components/registerTypes";

import { formattedMoney } from "@utils/numbersFunctions";
import { getErrorMessage } from "@utils/errorMessage";

import { registerReceiveService } from "@services/receiveService";

import { format } from "date-fns";

import type { ReceiveModel } from "@models/ReceiveModel";
import type { AppDrawerModel } from "@models/AppRoutesModel";

export default function New() {
  const navigation = useNavigation<AppDrawerModel>();

  const [inputDescription, setInputDescription] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [type, setType] = useState<"receita" | "despesa">("receita");
  const [isLoadingRegister, setIsLoadingRegister] = useState(false);

  function handleSubmit() {
    Keyboard.dismiss();

    const description = inputDescription.trim();
    const value = inputValue.trim();

    if (description === "" || value === "" || type === null) {
      Alert.alert("Preencha todos os campos!");
      return;
    }

    const valueParseFloat = Number.parseFloat(value);

    if (Number.isNaN(valueParseFloat)) {
      Alert.alert("Valor inválido!");
      return;
    }

    Alert.alert(
      "Confirmando dados",
      `Tipo: ${type} - Valor: ${formattedMoney(valueParseFloat)}`,
      [
        {
          style: "cancel",
          text: "Cancelar",
        },
        {
          style: "default",
          text: "Salvar",
          onPress: () => handleRegisterReceive(),
        },
      ],
    );
  }

  async function handleRegisterReceive() {
    try {
      setIsLoadingRegister(true);
      const receive: ReceiveModel = {
        date: format(new Date(), "dd/MM/yyyy"),
        description: inputDescription,
        type: type,
        value: Number(inputValue),
      };

      await registerReceiveService({ receive });

      navigation.navigate("home");

      setInputDescription("");
      setInputValue("");
      setType("receita");
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      Alert.alert(errorMessage);
    } finally {
      setIsLoadingRegister(false);
    }
  }

  return (
    <KeyboardDismissContainer>
      <Background>
        <Header title="Registrando" />

        <Container>
          <AreaInput>
            <Input
              placeholder="Descrição"
              value={inputDescription}
              onChangeText={(value) => setInputDescription(value)}
            />
          </AreaInput>

          <AreaInput>
            <Input
              placeholder="Valor desejado"
              keyboardType="numeric"
              value={inputValue}
              onChangeText={(value) => setInputValue(value)}
            />
          </AreaInput>

          <RegisterTypes
            type={type}
            sendTypeChanged={(item) => setType(item)}
          />

          <Button
            variant="secondary"
            onPress={handleSubmit}
            isLoading={isLoadingRegister}
          >
            Registrar
          </Button>
        </Container>
      </Background>
    </KeyboardDismissContainer>
  );
}
