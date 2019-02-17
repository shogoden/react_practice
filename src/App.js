import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  // constructorがclass読み込み時に自動的に読み込まれる。initialize的な
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1})
  }
  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1})
  }
  
  render() {
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
