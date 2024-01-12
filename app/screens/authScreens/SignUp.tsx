import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MontraHeader from '../../components/Headers/MontraHeader';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <MontraHeader title="Sign Up" />
      <Text>SignUp</Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
