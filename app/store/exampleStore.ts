import {createState, useState} from '@hookstate/core';
import CreatePersistor, {PersistorWrapper} from 'hookstate-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const wrapped = PersistorWrapper({
  count: 0,
});

const exampleState = createState(wrapped);

// create the peristor pluging
const persistor = CreatePersistor({
  key: '@exampleStore', // store name
  engine: AsyncStorage, // storage engine which implements getItem & setItem
});

exampleState.attach(persistor);

export const useGlobalExampleState = () => {
  const state = useState(exampleState);

  return {
    // getters
    count: state.count.get(),

    // setters/mutators
    increment: (num?: number) => {
      state.count.set(c => c + (num || 1));
    },
    decrement: (num?: number) => {
      state.count.set(c => c - (num || 1));
    },
  };
};
