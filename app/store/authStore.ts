import {createState, useState} from '@hookstate/core';
import CreatePersistor, {PersistorWrapper} from 'hookstate-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthStoreInterface} from '../utils/types/AuthTypes';

const wrapped = PersistorWrapper<AuthStoreInterface>({
  isLoggedIn: false,
  token: '',
});

const authState = createState(wrapped);

// create the peristor pluging
const persistor = CreatePersistor({
  key: '@exampleStore', // store name
  engine: AsyncStorage, // storage engine which implements getItem & setItem
});

authState.attach(persistor);

export const useGlobalAuthState = () => {
  const state = useState(authState);

  return {
    // getters
    isLoggedIn: state.isLoggedIn.get(),
    token: state.token.get(),

    // setters/mutators
    setLoggedIn: (val: boolean) => {
      state.isLoggedIn.set(val);
    },

    setToken: (val: string) => {
      state.token.set(val);
    },
  };
};
