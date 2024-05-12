import {GestureResponderEvent, StyleSheet} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

interface MontraButton {
  icon?: string;
  onPress: (event: GestureResponderEvent) => void;
  text: string;
  disabled?: boolean;
  colors?: {
    buttonColor: string;
    textColor: string;
  };
}

const MontraButton: React.FC<MontraButton> = ({
  icon,
  onPress,
  text,
  disabled = false,
  colors = {
    buttonColor: '#EEE5FF',
    textColor: '#7F3DFF',
  },
}) => {
  return (
    <Button
      icon={icon}
      mode="contained"
      onPress={onPress}
      buttonColor={colors.buttonColor}
      textColor={colors.textColor}
      disabled={disabled}
      style={styles.button}
      labelStyle={styles.buttonLabel}>
      {text}
    </Button>
  );
};

export default MontraButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 16,
  },

  buttonLabel: {
    fontSize: 18,
    paddingVertical: 5,
  },
});
