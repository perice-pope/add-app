import React, { Component } from 'react';
import './App.css';
import Number from './components/Number/Number';
import Buttons from './components/Buttons/Buttons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 }
  }
}

addOne = (num) => 
  this.setState({
    number: num + 1
  });

  render() { 
    return ( 
      <div>
        <Number number={this.state.number} />
        <Buttons number={number} add={this.addOne} />
      </div>
     );
  }
}
 
export default App

