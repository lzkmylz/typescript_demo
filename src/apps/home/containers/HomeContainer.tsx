import * as React from 'react';
import HomeStore from '../stores/HomeStore';

import Button from 'antd/lib/button';
import '../styles/HomeContainer.css';

class HomeContainer extends React.Component {
  handleClick = (): void => {
    HomeStore.changeUsername();
  }

  public render(): React.ReactNode {
    return (
      <div>
        <p>
          This is HomeContainer!
          The username is: { HomeStore.username }
        </p>
        <Button
          type="primary"
          onClick={this.handleClick}
        >
          change username
        </Button>
      </div>
    )
  }
}

export default HomeContainer;
