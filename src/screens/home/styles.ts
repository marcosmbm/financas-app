import styled from "styled-components/native";

import type { BalanceModel } from "@models/BalanceModel";
import { FlatList, type FlatListProps } from "react-native";
import type { ReceiveModel } from "@models/ReceiveModel";

import { config } from "src/styles/config";

const ListBalanceType = FlatList as new (
  props: FlatListProps<BalanceModel>,
) => FlatList<BalanceModel>;

const ListReceiveType = FlatList as new (
  props: FlatListProps<ReceiveModel>,
) => FlatList<ReceiveModel>;

export const ListBalance = styled(ListBalanceType)`
    max-height: 190px;
`;

export const Area = styled.View`
    padding: 14px;
    background-color: ${config.colors.white};
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    align-items: center;
    flex-direction: row;
    margin-top: 14px;
`;

export const Title = styled.Text`
    color: ${config.colors.black};
    margin-left: 4px;
    font-weight: bold;
    font-size: 18px;
`;

export const List = styled(ListReceiveType).attrs({
  contentContainerStyle: { paddingBottom: 20 },
})`
    flex: 1;
    padding: 14px;
    background-color: ${config.colors.white};
`;
