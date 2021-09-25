import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router'

import Navigation from './Navigation'

const pageTexts = ['Overview', 'Details']

test('loads item', () => {
  render(
    <Router>
      <Navigation />
    </Router>
  )

  for (let pageText of pageTexts) {
    const itemText = screen.getByText(pageText)
    expect(itemText).toBeInTheDocument()
  }
})
