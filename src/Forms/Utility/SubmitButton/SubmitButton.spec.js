import { render, screen } from '@testing-library/react'

import SubmitButton from './SubmitButton'

const testTitle = 'Add Item'

test('loads items eventually', () => {
  render(<SubmitButton title={testTitle} />)

  const items = screen.getByText(testTitle)
  expect(items).toBeInTheDocument()
})
