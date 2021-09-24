import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import BalanceItemHeader from './BalanceItemHeader'

const itemTitle = 'Long-Term'
const mockOnMenuButtonClick = jest.fn()

test('loads item and shows text', () => {
  render(
    <BalanceItemHeader
      itemTitle={itemTitle}
      showMenu={true}
      onMenuButtonClick={mockOnMenuButtonClick}
    />
  )

  const items = screen.getByText(itemTitle)
  expect(items).toBeInTheDocument()
})

test('showMenu: false -> shows "+" sign', () => {
  render(
    <BalanceItemHeader
      itemTitle={itemTitle}
      showMenu={false}
      onMenuButtonClick={mockOnMenuButtonClick}
    />
  )

  const items = screen.getByText('+')
  expect(items).toBeInTheDocument()
})

test('showMenu: true -> shows "-" sign', () => {
  render(
    <BalanceItemHeader
      itemTitle={itemTitle}
      showMenu={true}
      onMenuButtonClick={mockOnMenuButtonClick}
    />
  )

  const items = screen.getByText('-')
  expect(items).toBeInTheDocument()
})

test('does something on button click', () => {
  render(
    <BalanceItemHeader
      itemTitle={itemTitle}
      showMenu={true}
      onMenuButtonClick={mockOnMenuButtonClick}
    />
  )

  const button = screen.getByRole('button')
  userEvent.click(button)
  expect(mockOnMenuButtonClick).toBeCalled()
})
