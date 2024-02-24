import {GestureResponderEvent, StyleSheet} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

const GoogleButton: React.FC = () => {
  const googleLoginOrSignup = (e: GestureResponderEvent): void => {
    e.preventDefault();
    console.log('====================================');
    console.log('Google login or signup');
    console.log('====================================');
  };
  return (
    <Button
      icon="google"
      mode="contained"
      onPress={googleLoginOrSignup}
      style={styles.button}
      labelStyle={styles.buttonLabel}>
      Sign Up with Google
    </Button>
  );
};

export default GoogleButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 16,
    backgroundColor: '#F1F1FA',
  },

  buttonLabel: {
    fontSize: 18,
    color: '#7F3DFF',
    paddingVertical: 5,
  },
});
