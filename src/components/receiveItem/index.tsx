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

import { formattedMoney } from "@utils/numbersFunctions";

interface ReceiveItemProps {
  receive: ReceiveModel;
}

export function ReceiveItem({ receive }: ReceiveItemProps) {
  return (
    <Container>
      <Type>
        <IconView
          bg={
            receive.type === "receita" ? config.colors.green : config.colors.red
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
  );
}
