// @flow
import React, { Component, Fragment } from 'react'
import type { ContextRouter } from 'react-router-dom'
import Child from './child'

type Props = {
  ...$Exact<ContextRouter>
}

type State = {
  count: number
}

class Rerender extends Component<Props, State> {
  state = {
    count: 0
  }

  render() {
    return (
      <Fragment>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          increment
        </button>
        <Child count={this.state.count} />
      </Fragment>
    )
  }
}

export default Rerender