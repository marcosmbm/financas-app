import { useNavigation, DrawerActions } from "@react-navigation/native";

import { config } from "src/styles/config";
import { Container, Title, ButtonMenu } from "./styles";

import Icon from "react-native-vector-icons/Feather";

interface HeaderProps {
  title?: string;
}

export function Header({ title }: HeaderProps) {
  const navigation = useNavigation();

  function onOpenDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  return (
    <Container>
      <ButtonMenu onPress={onOpenDrawer}>
        <Icon name="menu" size={30} color={config.colors.black} />
      </ButtonMenu>

      {title && <Title>{title}</Title>}
    </Container>
  );
}
