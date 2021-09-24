import { render, screen } from '@testing-library/react'

import SubmitButton from './SubmitButton'

const testTitle = 'Add Item'

test('loads item and shows text', () => {
  render(<SubmitButton title={testTitle} />)

  const items = screen.getByText(testTitle)
  expect(items).toBeInTheDocument()
})
