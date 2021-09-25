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

test('has links equal to pageTexts count', () => {
  render(
    <Router>
      <Navigation />
    </Router>
  )

  const linkElements = screen.getAllByRole('link')
  expect(linkElements.length).toBeGreaterThanOrEqual(pageTexts.length)
  expect(linkElements.length).toBeLessThanOrEqual(pageTexts.length)
})
