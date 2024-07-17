import { useBalance } from "@hooks/useBalance";

import { ListBalance, Area, Title, List } from "./styles";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Background } from "@components/ui/Background";
import { Header } from "@components/header";
import { BalanceItem } from "@components/balanceItem";
import { ReceiveItem } from "@components/receiveItem";
import { Loader } from "@components/loader";

import { config } from "src/styles/config";

export default function Home() {
  const { listBalance, movements, isLoading } = useBalance();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Background>
      <Header title="Minhas movimentações" />

      <ListBalance
        data={listBalance}
        keyExtractor={(item) => item.tag}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <BalanceItem balance={item} />}
      />

      <Area>
        <TouchableOpacity>
          <Icon name="event" color={config.colors.black} size={30} />
        </TouchableOpacity>

        <Title>Últimas Movimentações</Title>
      </Area>

      <List
        data={movements}
        keyExtractor={(item) => item.id as string}
        renderItem={({ item }) => <ReceiveItem receive={item} />}
        showsVerticalScrollIndicator={false}
      />
    </Background>
  );
}
