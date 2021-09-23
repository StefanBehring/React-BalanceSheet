import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router'

import BackButton from './BackButton'

test('loads items eventually', () => {
  render(
    <Router>
      <BackButton />
    </Router>
  )

  // Wait for page to update with query text
  const items = screen.getByText('Back')
  expect(items).toBeInTheDocument()
})
