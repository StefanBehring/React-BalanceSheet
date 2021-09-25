import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router'

import BackButton from './BackButton'

test('loads item', () => {
  render(
    <Router>
      <BackButton />
    </Router>
  )

  const items = screen.getByText('Back')
  expect(items).toBeInTheDocument()
})
