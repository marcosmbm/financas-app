import { useAuth } from "@hooks/useAuth";
import { useBalance } from "@hooks/useBalance";

import { FlatList } from "react-native";

import { Background } from "@components/ui/Background";
import { Header } from "@components/header";
import { BalanceItem } from "@components/balanceItem";

import type { BalanceModel } from "@models/BalanceModel";

export default function Home() {
  const { signOut } = useAuth();
  const { listBalance } = useBalance();

  return (
    <Background>
      <Header title="Minhas movimentações" />

      <FlatList
        data={listBalance}
        keyExtractor={(item) => (item as BalanceModel).tag}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <BalanceItem balance={item} />}
        style={{ maxHeight: 190 }}
      />
    </Background>
  );
}
