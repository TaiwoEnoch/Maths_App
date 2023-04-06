import './index.css';
import React from 'react';
import Calculator from './components/Calculator';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Maths App</h1>
        </header>
        <Calculator />
      </div>
    );
  }
}

export default App;
