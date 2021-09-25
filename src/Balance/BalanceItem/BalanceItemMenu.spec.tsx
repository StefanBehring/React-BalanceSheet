import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter as Router } from 'react-router'

import BalanceItemMenu from './BalanceItemMenu'

const editTitle = 'Edit'
const deleteTitle = 'Delete'
const mockOnDeleteItemClick = jest.fn()

test('loads item and shows text', () => {
  render(
    <Router>
      <BalanceItemMenu
        editPath={`/edit/0`}
        onDeleteItemClick={mockOnDeleteItemClick}
      />
    </Router>
  )

  const editText = screen.getByText(editTitle)
  expect(editText).toBeInTheDocument()

  const deleteText = screen.getByText(deleteTitle)
  expect(deleteText).toBeInTheDocument()
})

test('does something on button click', () => {
  render(
    <Router>
      <BalanceItemMenu
        editPath={`/edit/0`}
        onDeleteItemClick={mockOnDeleteItemClick}
      />
    </Router>
  )

  const buttons = screen.getAllByRole('button')
  for (let button of buttons) {
    userEvent.click(button)
    expect(mockOnDeleteItemClick).toBeCalled()
  }
})
