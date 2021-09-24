import { render, screen } from '@testing-library/react'

import BalanceSheet from './BalanceSheet'

const mockOnDeleteItem = jest.fn()
const balance = {
  sides: ['activa', 'passiva'],
  types: ['long-term', 'mid-term', 'short-term'],
  items: [
    {
      id: '0',
      side: 'activa',
      type: 'long-term',
      title: 'appartment',
      description: 'my appartment',
      amount: '23123.89',
    },
  ],
}

test('loads item and shows underlying buttons', () => {
  render(<BalanceSheet balance={balance} onDeleteItem={mockOnDeleteItem} />)

  const buttons = screen.getAllByRole('button')
  expect(buttons.length).toBeGreaterThan(0)
})
