import type { ReceiveModel } from "@models/ReceiveModel";

import {
  Container,
  Type,
  IconView,
  TypeText,
  ValueText,
  DescriptionText,
} from "./styles";
import Icon from "react-native-vector-icons/Feather";
import { config } from "src/styles/config";
import { Alert, TouchableWithoutFeedback } from "react-native";

import { formattedMoney } from "@utils/numbersFunctions";

interface ReceiveItemProps {
  receive: ReceiveModel;
  removeMovement: (id: string) => void;
}

export function ReceiveItem({ receive, removeMovement }: ReceiveItemProps) {
  function handleLongPress() {
    Alert.alert(
      "Atenção",
      "Você tem certeza que deseja deletar esse registro?",
      [
        {
          style: "cancel",
          text: "Cancelar",
        },
        {
          style: "default",
          text: "Continuar",
          onPress: () => removeMovement(receive.id as string),
        },
      ],
    );
  }

  return (
    <TouchableWithoutFeedback onLongPress={handleLongPress}>
      <Container>
        <Type>
          <IconView
            bg={
              receive.type === "receita"
                ? config.colors.green
                : config.colors.red
            }
          >
            <Icon
              name={receive.type === "receita" ? "arrow-up" : "arrow-down"}
              size={28}
              color={config.colors.white}
            />
            <TypeText>{receive.type}</TypeText>
          </IconView>
        </Type>

        <ValueText>{formattedMoney(receive.value)}</ValueText>

        <DescriptionText>{receive.description}</DescriptionText>
      </Container>
    </TouchableWithoutFeedback>
  );
}
