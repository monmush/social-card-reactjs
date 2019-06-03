import React, {Component} from 'react';
import '../styles/export.scss';
import Post from '../component/Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Post/>
      </div>
    );
  }
}

export default App;
