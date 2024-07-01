// importing observables and decorate
import {observable, action, makeAutoObservable} from 'mobx';

class AuthStore {
  @observable jwt: null | string = null;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  setJwt = (currentToken: string) => {
    this.jwt = currentToken;
  };
}

export default AuthStore;
