import styled from "styled-components/native";
import { config } from "src/styles/config";

export const SubmitButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
    width: 90%;
    height: 45px;
    background-color: ${config.colors.blue};
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

export const SubmitButtonText = styled.Text`
    font-size: 20px;
    color: ${config.colors.white};
    font-weight: bold;
`;

export const Link = styled.TouchableOpacity``;

export const LinkText = styled.Text`
    color: ${config.colors.black};
`;
