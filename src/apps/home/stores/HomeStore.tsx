import { observable, action } from 'mobx';

class HomeStore {
  @observable username: string = 'lzkmylz';

  @action changeUsername = () => {
    this.username = 'changed username';
  }
}

export default new HomeStore();
