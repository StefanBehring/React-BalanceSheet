import { render, screen } from '@testing-library/react'

import BalanceSide from './BalanceSide'

const side = 'Activa'
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

test('loads item and shows text', () => {
  render(
    <BalanceSide
      key={side}
      balance={balance}
      side={side}
      onDeleteItem={mockOnDeleteItem}
    />
  )

  const titleText = screen.getByText(side)
  expect(titleText).toBeInTheDocument()
})
