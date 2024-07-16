import { TouchableWithoutFeedback, Keyboard } from "react-native";

interface KeyboardDismissContainerProps {
  children: React.ReactNode;
}

export function KeyboardDismissContainer({
  children,
}: KeyboardDismissContainerProps) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
}
