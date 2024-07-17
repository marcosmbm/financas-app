import { useState, useEffect } from "react";
import { useAuth } from "./useAuth";
import { useIsFocused } from "@react-navigation/native";

import { getBalanceUserService } from "@services/userService";
import { getReceivesService } from "@services/receiveService";

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
        const dateFormatted = format(dateMovements, "dd/MM/yyyy");

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

  return {
    listBalance,
    movements,
    isLoading,
  };
}
