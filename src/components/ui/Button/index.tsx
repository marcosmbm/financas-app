import { ActivityIndicator } from "react-native";

import type { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonText } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  variant?: "solid" | "link" | "secondary";
  isLoading?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "solid",
  isLoading = false,
  children,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer variant={variant} disabled={isLoading} {...rest}>
      <ButtonText variant={variant}>
        {isLoading ? <ActivityIndicator color={"#fff"} /> : children}
      </ButtonText>
    </ButtonContainer>
  );
}
