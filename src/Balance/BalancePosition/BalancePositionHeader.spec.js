import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import BalancePositionHeader from './BalancePositionHeader'

const typeTitle = 'Edit'
const mockOnAddItemButtonClick = jest.fn()

test('loads item and shows text', () => {
  render(
    <BalancePositionHeader
      type={typeTitle}
      onAddItemButtonClick={mockOnAddItemButtonClick}
    />
  )

  const typeText = screen.getByText(typeTitle)
  expect(typeText).toBeInTheDocument()
})

test('does something on button click', () => {
  render(
    <BalancePositionHeader
      type={typeTitle}
      onAddItemButtonClick={mockOnAddItemButtonClick}
    />
  )

  const buttons = screen.getAllByRole('button')
  for (let button of buttons) {
    userEvent.click(button)
    expect(mockOnAddItemButtonClick).toBeCalled()
  }
})
