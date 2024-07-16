import { config } from "src/styles/config";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    width: 100%;
    max-height: 60px;
    flex-direction: row;
    margin-top: 30px;
    margin-left: 15px;
    margin-bottom: 15px;
    gap: 8px;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 20px;
    color: ${config.colors.black};
`;

export const ButtonMenu = styled.TouchableOpacity``;
