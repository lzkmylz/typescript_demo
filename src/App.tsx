import * as React from 'react';
import HomeContainer from './apps/home/containers/HomeContainer';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <HomeContainer />
      </div>
    );
  }
}

export default App;
