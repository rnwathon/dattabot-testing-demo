import { render, screen, fireEvent } from '@testing-library/react';
import TodoInput from '..';

it("should render input text", () => {
  // Render
  render(<TodoInput />)
  // Query
  const inputTextEl = screen.getByPlaceholderText("Add new task here")
  // Assertion
  expect(inputTextEl).toBeInTheDocument();
})

it('should able to type in input text', () => {
  render(<TodoInput />)
  const inputTextEl = screen.getByPlaceholderText("Add new task here")
  // Event
  fireEvent.change(inputTextEl, { target: { value: "Go Shopping" } })
  // Assertion
  expect(inputTextEl.value).toBe("Go Shopping")
})

it('should able to clear input after button click', () => {
  render(<TodoInput onSubmit={() => {}} />)
  const inputTextEl = screen.getByPlaceholderText("Add new task here")
  const buttonEl = screen.getByRole("button", { value: "Add Todo" })
  // Event
  fireEvent.change(inputTextEl, { target: { value: "Go Shopping" } })
  fireEvent.click(buttonEl)
  // Assertion
  expect(inputTextEl.value).toBe("")
})
