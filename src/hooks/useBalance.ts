import { useAuth } from "./useAuth";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";

import { getBalanceUserService } from "@services/userService";

import type { BalanceModel } from "@models/BalanceModel";

import { format } from "date-fns";

export function useBalance() {
  const { user } = useAuth();
  const isFocused = useIsFocused();

  const [listBalance, setListBalance] = useState<BalanceModel[]>([]);
  const [dateMovements, setDateMovements] = useState(new Date());

  const token = user?.token ?? "";

  useEffect(() => {
    let isActive = isFocused;

    async function getMovements() {
      const dateFormatted = format(dateMovements, "dd/MM/yyyyy");
      const balance = await getBalanceUserService(token, dateFormatted);

      console.log(balance);

      setListBalance(balance);
    }

    if (isActive) getMovements();

    return () => {
      isActive = false;
    };
  }, [dateMovements, token, isFocused]);

  return {
    listBalance,
  };
}
