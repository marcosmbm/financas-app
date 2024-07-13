import { config } from "src/styles/config";
import styled from "styled-components/native";

export const AreaInput = styled.View`
    flex-direction: row;
    width: 90%;
    background-color: ${config.colors.white};
    border-radius: 8px;
    height: 45px;
`;

export const Input = styled.TextInput`
    flex: 1;
    font-size: 17px;
    padding: 0 10px;
    color: ${config.colors.black};
`;
