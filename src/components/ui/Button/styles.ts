import styled, { css } from "styled-components/native";
import { config } from "src/styles/config";

interface ButtonStylesProps {
  variant: "solid" | "link" | "secondary" | "logout";
}

export const ButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<ButtonStylesProps>`
    width: 90%;
    height: 45px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;

    ${(props) =>
      props.variant === "solid" &&
      css`
        background-color: ${config.colors.blue};
    `}

    ${(props) =>
      props.variant === "link" &&
      css`
        background-color: transparent;
    `}

    ${(props) =>
      props.variant === "secondary" &&
      css`
        background-color: ${config.colors.green};
    `}

    ${(props) =>
      props.variant === "logout" &&
      css`
        background-color: transparent;
        border-width: 1px;
        border-color: ${config.colors.red};
    `}
`;

export const ButtonText = styled.Text<ButtonStylesProps>`
    font-size: 20px;

    ${(props) =>
      props.variant === "solid" &&
      css`
         color: ${config.colors.white};
         font-weight: bold;
      `}

    ${(props) =>
      props.variant === "link" &&
      css`
        color: ${config.colors.black};
      `}

      ${(props) =>
        props.variant === "secondary" &&
        css`
        color: ${config.colors.white};
      `}

      ${(props) =>
        props.variant === "logout" &&
        css`
        color: ${config.colors.red};
        font-weight: bold;
    `}
`;
