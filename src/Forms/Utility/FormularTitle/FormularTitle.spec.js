import { render, screen } from '@testing-library/react'

import FormularTitle from './FormularTitle'

const testTitle = 'Activa'

test('loads item and shows text', () => {
  render(<FormularTitle title={testTitle} />)

  const items = screen.getByText(testTitle)
  expect(items).toBeInTheDocument()
})
