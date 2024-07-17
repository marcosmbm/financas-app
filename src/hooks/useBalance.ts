import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";

import { getBalanceUserService } from "@services/userService";

import type { BalanceModel } from "@models/BalanceModel";

import { format } from "date-fns";

export function useBalance() {
  const isFocused = useIsFocused();

  const [listBalance, setListBalance] = useState<BalanceModel[]>([]);
  const [dateMovements, setDateMovements] = useState(new Date());

  useEffect(() => {
    let isActive = isFocused;

    async function getMovements() {
      const dateFormatted = format(dateMovements, "dd/MM/yyyy");

      const balance = await getBalanceUserService(dateFormatted);

      setListBalance(balance);
    }

    if (isActive) getMovements();

    return () => {
      isActive = false;
    };
  }, [dateMovements, isFocused]);

  return {
    listBalance,
  };
}
