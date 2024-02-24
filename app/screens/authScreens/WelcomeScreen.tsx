import {StyleSheet, View} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import WelcomeCard from '../../components/cards/WelcomeCard';
import {Button} from 'react-native-paper';
import Welcome1 from '../../assets/svgs/Welcome1';
import Welcome2 from '../../assets/svgs/Welcome2';
import Welcome3 from '../../assets/svgs/Welcome3';
import {useNavigation} from '@react-navigation/native';
import MontraButton from '../../components/buttons/MontraButton';
// import {useGlobalAuthState} from '../store/authStore';

const data = [
  {
    icon: <Welcome1 width={252} height={258} />,
    title: 'Gain total control of your money',
    subtitle: 'Become your own money manager and make every cent count',
  },

  {
    icon: <Welcome2 width={312} height={258} />,
    title: 'Know where your money goes',
    subtitle:
      'Track your transaction easily, with categories and financial report ',
  },

  {
    icon: <Welcome3 width={312} height={258} />,
    title: 'Planning ahead',
    subtitle: 'Setup your budget for each category so you in control',
  },
];

const WelcomeScreen = () => {
  // const authState = useGlobalAuthState();
  const navigation = useNavigation();
  function signUp(): void {
    // authState.setLoggedIn(true);
    navigation.navigate('SignUp');
  }

  function login(): void {
    // authState.setLoggedIn(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapperContainer}>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          loop={false}
          paginationStyle={styles.pagination}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}>
          {data.map((item, index) => (
            <WelcomeCard
              key={index}
              icon={item.icon}
              heading={item.title}
              subHeading={item.subtitle}
            />
          ))}
        </Swiper>
      </View>

      <View style={styles.buttonsContainer}>
        <MontraButton
          icon="human-greeting"
          onPress={signUp}
          text="Sign Up"
          active
        />
        <MontraButton icon="login" onPress={login} text="Login" />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },

  wrapperContainer: {
    flex: 5,
    // backgroundColor: 'blue',
  },

  buttonsContainer: {
    flex: 1,
    paddingHorizontal: 31,
    gap: 16,
  },

  dot: {
    backgroundColor: '#EEE5FF',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },

  activeDot: {
    backgroundColor: '#7F3DFF',
    width: 15,
    height: 15,
    borderRadius: 7.5,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },

  button: {
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

  wrapper: {},

  pagination: {},
});
