class Count extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    // Increment count by 1
    this.setState(({ count }) => { // fancy deconstruction within the arrow function's args
      return {
        count: ++count
      }
    })
  }
  decrement() {
    // Decrement count by 1
    this.setState(({ count }) => { // same again here, take the property we need, not the whole state
      return {
        count: --count
      }
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Count />,
  document.getElementById('app')
);
