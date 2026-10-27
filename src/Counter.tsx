import { Component } from 'react'

// Keep the component's state shape explicit and type-safe.
interface CounterState {
  count: number
}

class Counter extends Component<object, CounterState> {
  state: CounterState = {
    count: 0,
  }

  // Use the previous state to avoid stale values during batched updates.
  increment = () => {
    this.setState((previousState) => ({
      count: previousState.count + 1,
    }))
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button type="button" onClick={this.increment}>
          Increment
        </button>
      </div>
    )
  }
}

export default Counter
