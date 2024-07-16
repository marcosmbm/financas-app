import { useState } from "react";

import { config } from "src/styles/config";
import { Container, RegisterButton, RegisterLabel } from "./styles";
import Feather from "react-native-vector-icons/Feather";

interface RegisterTypes {
  type: "receita" | "despesa";
  sendTypeChanged: (item: "receita" | "despesa") => void;
}

export function RegisterTypes({ type, sendTypeChanged }: RegisterTypes) {
  const [typeChecked, setTypeChecked] = useState(type);

  function changeType(typeChecked: "receita" | "despesa") {
    setTypeChecked(typeChecked);
    sendTypeChanged(typeChecked);
  }

  return (
    <Container>
      <RegisterButton
        onPress={() => changeType("receita")}
        checked={typeChecked === "receita"}
      >
        <Feather name="arrow-up" size={25} color={config.colors.black} />
        <RegisterLabel>Receita</RegisterLabel>
      </RegisterButton>

      <RegisterButton
        onPress={() => changeType("despesa")}
        checked={typeChecked === "despesa"}
      >
        <Feather name="arrow-down" size={25} color={config.colors.black} />
        <RegisterLabel>Despesa</RegisterLabel>
      </RegisterButton>
    </Container>
  );
}
