import { config } from "src/styles/config";
import styled from "styled-components/native";

interface BalanceStylesProps {
  bg: string;
}

export const Container = styled.View<BalanceStylesProps>`
    background-color: ${(props) => props.bg};
    margin-left: 14px;
    margin-right: 14px;
    border-radius: 4px;
    justify-content: center;
    align-items: flex-start;
    width: 300px;
    padding-left: 14px;
`;

export const Label = styled.Text`
    color: ${config.colors.white};
    font-size: 19px;
    font-weight: bold;
`;

export const Balance = styled.Text`
    color: ${config.colors.white};
    font-size: 30px;
    font-weight: bold
`;
