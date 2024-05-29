import React from 'react';
import { Appbar, Menu, useTheme, TouchableRipple, Switch } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';
import { StackHeaderProps } from '@react-navigation/stack';
import { PreferencesContext } from '../service/PreferencesContext';

interface CustomNavigationBarProps extends StackHeaderProps {
    // back: boolean | undefined;
}

const CustomNavigationBar: React.FC<CustomNavigationBarProps> = ({
  navigation,
  route,
  options,
  back,
}) => {

    const theme = useTheme();
    const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header
        theme={{
        colors: {
          primary: theme?.colors.surface,
        },
      }}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      {!back ? (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action
              icon="dots-vertical"
              onPress={openMenu}
            />
          }>
          <Menu.Item
            onPress={() => {
              console.log('Option 1 was pressed');
            }}
            title="Option 1"
          />
          <Menu.Item
            onPress={() => {
              console.log('Option 2 was pressed');
            }}
            title="Option 2"
          />
          <Menu.Item
            onPress={() => {
              console.log('Option 3 was pressed');
            }}
            title="Option 3"
            disabled
          />
        </Menu>
      ) : null}
        <Switch
          color={'red'}
          value={isThemeDark}
          onValueChange={toggleTheme}
        />
    </Appbar.Header>
  );
};

export default CustomNavigationBar;