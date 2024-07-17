import { config } from "src/styles/config";
import styled from "styled-components/native";

interface IconViewStylesProps {
  bg: string;
}

export const Container = styled.View`
    background-color: ${config.colors.primary_color};
    border-radius: 4px;
    margin-bottom: 14px;
    padding: 10px;
`;

export const Type = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TypeText = styled.Text`
    color: ${config.colors.white};
    font-size: 16px;
    font-style: italic;
`;

export const IconView = styled.View<IconViewStylesProps>`
    flex-direction: row;
    align-items: center;
    gap: 8px;
    background-color: ${(props) => props.bg};
    padding: 2px 6px;
    border-radius: 4px;
`;

export const ValueText = styled.Text`
    color: ${config.colors.black};
    font-size: 20px;
    margin-top: 4px;
`;

export const DescriptionText = styled.Text.attrs({
  numberOfLines: 1,
})`
    color: ${config.colors.black};
    font-size: 16px;
    margin-top: 8px;
`;
