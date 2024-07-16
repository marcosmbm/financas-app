import { config } from "src/styles/config";
import styled, { css } from "styled-components/native";

interface RegisterButtonStylesProps {
  checked: boolean;
}

export const Container = styled.View`
    width: 90%;
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;

export const RegisterButton = styled.TouchableOpacity<RegisterButtonStylesProps>`
    flex: 1;
    background-color: #e7e7e7;
    align-items: center;
    justify-content: center;
    height: 45px;
    border: 1.5px;
    border-color: transparent;
    border-radius: 4px;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    ${(props) =>
      props.checked &&
      css`
        border-color: ${config.colors.blue};
        background-color: ${config.colors.white};
    `}
`;

export const RegisterLabel = styled.Text`
    color: ${config.colors.black};
    font-size: 17px;
`;
