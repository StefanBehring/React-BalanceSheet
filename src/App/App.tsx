import styled from 'styled-components/macro'
import { useState } from 'react'
import { Route, Switch } from 'react-router'
import BalanceSheet from '../Balance/BalanceSheet/BalanceSheet'
import LocalStorageInit from './LocalStorageInit'
import AddItem from '../Forms/AddItem/AddItem'
import EditItem from '../Forms/EditItem/EditItem'
import { FDeleteItem, IBalance, IItem } from './balanceTypes'

function App() {
  // LocalStorage init
  LocalStorageInit()

  const [balanceLocalStorage, setBalanceLocalStorage] = useState(
    JSON.parse(localStorage.getItem('balance')!) as IBalance
  )

  const addItemHandler = (addItem: IItem) => {
    const newBalance = { ...balanceLocalStorage }
    newBalance.items.push(addItem)
    localStorage.setItem('balance', JSON.stringify(newBalance))
    setBalanceLocalStorage(newBalance)
  }

  const editItemHandler = (editedItem: IItem) => {
    const newBalance = { ...balanceLocalStorage }
    const itemIndex = newBalance.items.map(el => el.id).indexOf(editedItem.id)
    newBalance.items[itemIndex] = editedItem
    localStorage.setItem('balance', JSON.stringify(newBalance))
    setBalanceLocalStorage(newBalance)
  }

  const deleteItemHandler: FDeleteItem = (deleteItemId: string) => {
    const newItems = balanceLocalStorage.items.filter(
      element => element.id !== deleteItemId
    )
    const balance = {
      ...balanceLocalStorage,
      items: newItems,
    }
    localStorage.setItem('balance', JSON.stringify(balance))
    setBalanceLocalStorage(balance)
  }

  return (
    <AppDiv>
      <header className="app__header">
        <AppTitle>Balance Sheet</AppTitle>
      </header>
      <Switch>
        <Route exact path="/add/:side/:type">
          <AddItem onAddSubmit={addItemHandler} />
        </Route>
        <Route exact path="/edit/:itemId">
          <EditItem
            balance={balanceLocalStorage}
            onEditSubmit={editItemHandler}
          />
        </Route>
        <Route exact path="/">
          <BalanceSheet
            balance={balanceLocalStorage}
            onDeleteItem={deleteItemHandler}
          />
        </Route>
      </Switch>
      <AppFooter>
        <a
          href="https://github.com/StefanBehring/React-Privatbilanz"
          target="_blank"
          rel="noreferrer"
        >
          A github project
        </a>
        <p>by: Stefan Behring</p>
      </AppFooter>
    </AppDiv>
  )
}

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 350px;
  @media screen and (min-width: 760px) {
    width: 750px;
  }
`

const AppTitle = styled.h1`
  color: var(--color-secondary);
  text-align: center;
`

const AppFooter = styled.footer`
  text-align: center;
`

export default App
