import {
  GestureResponderEvent,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import MontraHeader from '../../components/Headers/MontraHeader';
import MontraTextInput from '../../components/inputs/MontraTextInput';
import MontraCheckbox from '../../components/checkboxes/MontraCheckbox';
import MontraButton from '../../components/buttons/MontraButton';
import GoogleButton from '../../components/buttons/GoogleButton';

const SignUp = () => {
  const [currentCheckState, setCurrentCheckState] = useState<boolean>(false);

  const openTermsAndPrivacy = (e: GestureResponderEvent) => {
    e.preventDefault();
    Linking.openURL('https://www.montra.com/terms');
  };

  function login(): void {
    // authState.setLoggedIn(true);
  }

  return (
    <>
      <MontraHeader title="Sign Up" />
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.inputContainer}>
            <MontraTextInput
              inputType="text"
              label="Name"
              placeholder="Enter your name"
              onChange={text => {
                console.log('Name: ', text);
              }}
            />
            <MontraTextInput
              inputType="text"
              label="Email"
              placeholder="Enter Email"
              onChange={text => {
                console.log('Email: ', text);
              }}
            />
            <MontraTextInput
              inputType="password"
              label="Password"
              placeholder="*****"
              onChange={text => {
                console.log('Pass: ', text);
              }}
            />

            <View style={styles.policiesContainer}>
              <MontraCheckbox
                status={currentCheckState ? 'checked' : 'unchecked'}
                onCheckPress={setCurrentCheckState}
              />
              <Text style={styles.privacyText}>
                By signing up, you agree to the{' '}
                <Text style={styles.termsText} onPress={openTermsAndPrivacy}>
                  Terms of Service and Privacy Policy
                </Text>
              </Text>
            </View>
          </View>

          <View style={styles.buttonsContainer}>
            <MontraButton
              onPress={() => console.log('Sign up')}
              text="Sign Up"
              active
            />

            <Text style={styles.optionText}>Or with</Text>

            <GoogleButton />

            <Text style={[styles.optionText, styles.alertText]}>
              Already have an account?{' '}
              <Text style={styles.termsText} onPress={login}>
                Login
              </Text>
            </Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },

  inputContainer: {
    flex: 1,
    gap: 30,
  },

  policiesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  privacyText: {
    width: '90%',
    fontSize: 12,
    color: '#1E2121',
  },

  buttonsContainer: {
    flex: 1,
    width: '100%',
    paddingVertical: '10%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 30,
  },

  optionText: {
    fontSize: 16,
    color: '#91919F',
    fontWeight: '600',
  },

  termsText: {
    color: '#7F3DFF',
  },

  alertText: {
    fontWeight: '400',
  },
});
