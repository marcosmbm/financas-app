import { config } from "src/styles/config";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    gap: 14px;
`;

export const Message = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-top: 24px;
    color: ${config.colors.black};
`;

export const Name = styled.Text`
    color: ${config.colors.black};
    font-size: 24px;
`;
