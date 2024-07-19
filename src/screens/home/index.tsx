import { useState } from "react";
import { useBalance } from "@hooks/useBalance";

import { ListBalance, Area, Title, List } from "./styles";
import { TouchableOpacity, Modal } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Background } from "@components/ui/Background";
import { Header } from "@components/header";
import { BalanceItem } from "@components/balanceItem";
import { ReceiveItem } from "@components/receiveItem";
import { Loader } from "@components/loader";
import { CalendarModal } from "@components/calendarModal";

import { config } from "src/styles/config";

export default function Home() {
  const {
    listBalance,
    movements,
    isLoading,
    dateMovements,
    removeMovement,
    onFilterDate,
  } = useBalance();

  const [modalVisible, setModalVisible] = useState(false);

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
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon name="event" color={config.colors.black} size={30} />
        </TouchableOpacity>

        <Title>Últimas Movimentações</Title>
      </Area>

      <List
        data={movements}
        keyExtractor={(item) => item.id as string}
        renderItem={({ item }) => (
          <ReceiveItem removeMovement={removeMovement} receive={item} />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        statusBarTranslucent
      >
        <CalendarModal
          onClose={() => setModalVisible(false)}
          handleFilter={onFilterDate}
          currentDate={dateMovements}
        />
      </Modal>
    </Background>
  );
}
