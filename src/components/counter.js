import React from 'react';
import '../css/counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.initialValue };
  }

  handleDecrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };

  handleIncrement = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };

  render() {
    return React.createElement('div', { className: 'counter-container' },
      React.createElement('p', null, `Value: ${this.state.value}`),
      React.createElement('button', { className: 'counter-button-dec', onClick: this.handleDecrement }, 'Decrement'),
      React.createElement('button', { className: 'counter-button-inc', onClick: this.handleIncrement }, 'Increment')
    );
  }
}

export default Counter;
