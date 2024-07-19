import { useState, useEffect } from "react";
import { useAuth } from "./useAuth";
import { useIsFocused } from "@react-navigation/native";

import { getBalanceUserService } from "@services/userService";
import {
  getReceivesService,
  removeReceiveService,
} from "@services/receiveService";

import type { BalanceModel } from "@models/BalanceModel";
import type { ReceiveModel } from "@models/ReceiveModel";

import { format } from "date-fns";
import { Alert } from "react-native";

export function useBalance() {
  const { signOut } = useAuth();
  const isFocused = useIsFocused();

  const [listBalance, setListBalance] = useState<BalanceModel[]>([]);
  const [movements, setMovements] = useState<ReceiveModel[]>([]);
  const [dateMovements, setDateMovements] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isActive = isFocused;

    async function getMovements() {
      try {
        const date = new Date(dateMovements);
        const onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;

        const dateFormatted = format(onlyDate, "dd/MM/yyyy");

        const balance = await getBalanceUserService(dateFormatted);
        const receives = await getReceivesService(dateFormatted);

        setListBalance(balance);
        setMovements(receives);
      } catch (error) {
        Alert.alert("Erro ao buscar as movimentações");
        signOut();
      } finally {
        setIsLoading(false);
      }
    }

    if (isActive) getMovements();

    return () => {
      isActive = false;
      setIsLoading(true);
    };
  }, [dateMovements, isFocused, signOut]);

  async function removeMovement(id: string) {
    try {
      await removeReceiveService(id);
      setDateMovements(new Date());
    } catch (error) {
      Alert.alert("Erro ao deletar a movimentação");
    }
  }

  function onFilterDate(dateSelected: Date) {
    setDateMovements(dateSelected);
  }

  return {
    listBalance,
    movements,
    isLoading,
    dateMovements,
    removeMovement,
    onFilterDate,
  };
}
