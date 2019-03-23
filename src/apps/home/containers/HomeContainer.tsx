import * as React from 'react';
import HomeStore from '../stores/HomeStore';

class HomeContainer extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        This is HomeContainer!
        The username is: { HomeStore.username }
      </div>
    )
  }
}

export default HomeContainer;
