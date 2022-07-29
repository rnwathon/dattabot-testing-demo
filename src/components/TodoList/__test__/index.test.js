import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '..';

it("should strike the text when clicked", () => {
  // Render
  render(
    <TodoList>
      <TodoList.Item>Go Shopping</TodoList.Item>
      <TodoList.Item>Wash your hands</TodoList.Item>
      <TodoList.Item>Sleep</TodoList.Item>
    </TodoList>
  )

  // Query
  const todoListEl = screen.getAllByTestId('todo-list-item')
  const todoItemEl = todoListEl[0]

  // Event
  fireEvent.click(todoItemEl)

  // Assertion
  expect(todoItemEl).toHaveClass("line-through text-gray-400")
})