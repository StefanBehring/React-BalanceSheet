import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router'

import PageNotFound from './PageNotFound'

const pageTexts = ['Error 404', 'Page not found..']

test('loads item', () => {
  render(
    <Router>
      <PageNotFound />
    </Router>
  )

  for (let pageText of pageTexts) {
    const itemText = screen.getByText(pageText)
    expect(itemText).toBeInTheDocument()
  }
})
