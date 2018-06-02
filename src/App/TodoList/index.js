// @flow
import React, { Component } from 'react'
import { TodoListContainer } from './style'
import { Item } from './item'
import type { Todo, TodoList } from '../../type'
import { UserAppLayerError } from '../../UserAppLayerError'

type Props = {
  data: TodoList
}

class TodoListComponent extends Component<Props> {
  render() {
    const { data } = this.props
    if (!data.length)
      throw new UserAppLayerError('todolist must have at least one item.')

    const items: React$Node = data.map((v: Todo, i: number) => (
      <Item key={i} todo={v} />
    ))

    return <TodoListContainer>{items}</TodoListContainer>
  }
}

export default TodoListComponent
