import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import BalanceItemMenu from './BalanceItemMenu'

const editTitle = 'Edit'
const deleteTitle = 'Delete'
const mockOnEditItemClick = jest.fn()
const mockOnDeleteItemClick = jest.fn()

test('loads item and shows text', () => {
  render(
    <BalanceItemMenu
      onEditItemClick={mockOnEditItemClick}
      onDeleteItemClick={mockOnDeleteItemClick}
    />
  )

  const editText = screen.getByText(editTitle)
  expect(editText).toBeInTheDocument()

  const deleteText = screen.getByText(deleteTitle)
  expect(deleteText).toBeInTheDocument()
})

test('does something on button click', () => {
  render(
    <BalanceItemMenu
      onEditItemClick={mockOnEditItemClick}
      onDeleteItemClick={mockOnDeleteItemClick}
    />
  )

  const buttons = screen.getAllByRole('button')
  for (let button of buttons) {
    userEvent.click(button)
    expect(mockOnEditItemClick).toBeCalled()
  }
})
