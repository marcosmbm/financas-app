import { config } from "src/styles/config";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: rgba(34,34,34,0.5);
`;

export const Content = styled.View`
  flex: 2;
  width: 100%;
  background-color: ${config.colors.white};
  justify-content: center;
  align-items: center;
  padding: 14px;
`;
