import { useState } from "react";

import { View, TouchableWithoutFeedback } from "react-native";
import { Container, Content } from "./styles";

import { Button } from "@components/ui/Button";

import { Calendar, type DateData, LocaleConfig } from "react-native-calendars";
import type { MarkedDates } from "react-native-calendars/src/types";
import { config } from "src/styles/config";

import { ptBr } from "./localeCalendar";

LocaleConfig.locales["pt-br"] = ptBr;
LocaleConfig.defaultLocale = "pt-br";

interface CalendarProps {
  currentDate: Date;
  onClose: () => void;
  handleFilter: (date: Date) => void;
}

export function CalendarModal({
  onClose,
  handleFilter,
  currentDate,
}: CalendarProps) {
  const [dateNow, setDateNow] = useState(currentDate || new Date());
  const [markedDates, setMarkedDates] = useState({} as MarkedDates);

  function handleOnDayPress(date: DateData) {
    setDateNow(new Date(date.dateString));

    const marked: MarkedDates = {};

    marked[date.dateString] = {
      selected: true,
      selectedColor: config.colors.blue,
      textColor: config.colors.white,
    };

    setMarkedDates(marked);
  }

  function handlePressFilter() {
    handleFilter(dateNow);
    onClose();
  }

  return (
    <Container>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 1 }} />
      </TouchableWithoutFeedback>

      <Content>
        <View style={{ width: "100%" }}>
          <Calendar
            onDayPress={handleOnDayPress}
            markedDates={markedDates}
            enableSwipeMonths
            theme={{
              todayTextColor: config.colors.red,
              selectedDayBackgroundColor: config.colors.blue,
              selectedDayTextColor: config.colors.white,
            }}
          />
        </View>

        <Button onPress={handlePressFilter}>Filtrar</Button>
      </Content>
    </Container>
  );
}
