import { screen, render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { Route } from 'react-router'

import AddItem from './AddItem'

const side = 'activa'
const type = 'long-term'
const testTitle = `Add Item - ${side} ${type}`
const labelTitles = ['Title', 'Description', 'Amount']
const addItemButtonTitle = 'Add Item'

test('loads item and shows text', () => {
  const history = createMemoryHistory()
  const path = '/add/' + side + '/' + type
  history.push(path)

  render(
    <Router history={history}>
      <Route exact path="/add/:side/:type">
        <AddItem />
      </Route>
    </Router>
  )

  const titleText = screen.getByText(testTitle)
  expect(titleText).toBeInTheDocument()

  for (let labelTitle of labelTitles) {
    const labelTest = screen.getByLabelText(labelTitle)
    expect(labelTest).toBeInTheDocument()
  }

  const addItemButtonText = screen.getByText(addItemButtonTitle)
  expect(addItemButtonText).toBeInTheDocument()
})
