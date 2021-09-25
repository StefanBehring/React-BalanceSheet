import { screen, render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { Route } from 'react-router'

import EditItem from './EditItem'
import { IBalance } from '../../App/balanceTypes'

const balanceLocalStorage: IBalance = {
  sides: ['activa', 'passiva'],
  types: ['long-term', 'mid-term', 'short-term'],
  items: [
    {
      id: '0',
      side: 'activa',
      type: 'long-term',
      title: 'appartment',
      description: 'my appartment',
      amount: '23123.89',
    },
  ],
}
const itemId = '0'
const labelTitles = ['Title', 'Description', 'Amount']
const editSubmitHandler = jest.fn()

test('loads item and shows text', () => {
  const history = createMemoryHistory()
  const path = '/edit/' + itemId
  history.push(path)

  render(
    <Router history={history}>
      <Route exact path="/edit/:itemId">
        <EditItem
          balance={balanceLocalStorage}
          onEditSubmit={editSubmitHandler}
        />
      </Route>
    </Router>
  )

  for (let labelTitle of labelTitles) {
    const labelTest = screen.getByLabelText(labelTitle)
    expect(labelTest).toBeInTheDocument()
  }

  const editItemButton = screen.getByRole('button')
  expect(editItemButton).toBeInTheDocument()
})
