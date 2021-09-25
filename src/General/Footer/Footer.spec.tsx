import { render, screen } from '@testing-library/react'

import Footer from './Footer'

const pageTexts = ['A github project', 'by: Stefan Behring']

test('loads item', () => {
  render(<Footer />)

  for (let pageText of pageTexts) {
    const itemText = screen.getByText(pageText)
    expect(itemText).toBeInTheDocument()
  }
})
