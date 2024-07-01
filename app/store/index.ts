import AuthStore from './authStore';

class RootStore {
  authStore;
  loadingStatus = 'none';

  constructor() {
    this.authStore = new AuthStore();
  }

  finishedLoading = () => {
    this.loadingStatus = 'finished';
  };
}

export default new RootStore();
