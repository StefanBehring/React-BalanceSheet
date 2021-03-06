import styled from 'styled-components/macro'
import { useState } from 'react'
import { Route, Switch } from 'react-router'
import { FDeleteItem, IBalance, IItem } from './balanceTypes'
import BalanceSheet from '../Balance/BalanceSheet/BalanceSheet'
import LocalStorageInit from './LocalStorageInit'
import AddItem from '../Forms/AddItem/AddItem'
import EditItem from '../Forms/EditItem/EditItem'
import PageNotFound from '../Error/PageNotFound/PageNotFound'
import Header from '../General/Header/Header'
import Footer from '../General/Footer/Footer'
import OverviewPage from '../Overview/OverviewPage/OverviewPage'

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
      <Header />
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
        <Route exact path="/details">
          <BalanceSheet
            balance={balanceLocalStorage}
            onDeleteItem={deleteItemHandler}
          />
        </Route>
        <Route exact path="/">
          <OverviewPage balance={balanceLocalStorage} />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
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

export default App
