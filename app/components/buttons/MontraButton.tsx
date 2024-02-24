import {GestureResponderEvent, StyleSheet} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

interface MontraButton {
  icon?: string;
  onPress: (event: GestureResponderEvent) => void;
  text: string;
  active?: boolean;
}

const MontraButton: React.FC<MontraButton> = ({
  icon,
  onPress,
  text,
  active = false,
}) => {
  return (
    <Button
      icon={icon}
      mode="contained"
      onPress={onPress}
      style={[styles.button, active ? styles.active : {}]}
      labelStyle={[styles.buttonLabel, active ? styles.activeButtonLabel : {}]}>
      {text}
    </Button>
  );
};

export default MontraButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 16,
    backgroundColor: '#EEE5FF',
  },

  active: {
    backgroundColor: '#7F3DFF',
  },

  buttonLabel: {
    fontSize: 18,
    color: '#7F3DFF',
    paddingVertical: 5,
  },

  activeButtonLabel: {
    color: '#FFFFFF',
  },
});
