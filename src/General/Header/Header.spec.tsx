import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router'

import Header from './Header'

const pageTexts = ['Balance Sheet']

test('loads item', () => {
  render(
    <Router>
      <Header />
    </Router>
  )

  for (let pageText of pageTexts) {
    const itemText = screen.getByText(pageText)
    expect(itemText).toBeInTheDocument()
  }
})
