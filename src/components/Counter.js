import React from 'react';

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
    return React.createElement('div', null,
      React.createElement('p', null, `Value: ${this.state.value}`),
      React.createElement('button', { onClick: this.handleDecrement }, 'Decrement'),
      React.createElement('button', { onClick: this.handleIncrement }, 'Increment')
    );
  }
}

export default Counter;
