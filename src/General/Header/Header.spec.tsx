import { render, screen } from '@testing-library/react'

import Header from './Header'

const pageTexts = ['Balance Sheet']

test('loads item', () => {
  render(<Header />)

  for (let pageText of pageTexts) {
    const itemText = screen.getByText(pageText)
    expect(itemText).toBeInTheDocument()
  }
})
