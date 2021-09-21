import styled from 'styled-components'
import BalanceSheet from '../Balance/BalanceSheet/BalanceSheet'
import LocalStorageInit from './LocalStorageInit'
import { useState } from 'react'
import AddItem from '../Forms/AddItem/AddItem'
import { Route, Switch } from 'react-router'
import EditItem from '../Forms/EditItem/EditItem'

function App() {
  // LocalStorage init
  LocalStorageInit()

  const [balanceLocalStorage, setBalanceLocalStorage] = useState(
    JSON.parse(localStorage.getItem('balance'))
  )

  const deleteItemHandler = deleteItemId => {
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

  return (
    <AppDiv>
      <header className="app__header">
        <AppTitle>Balance Sheet</AppTitle>
      </header>
      <Switch>
        <Route exact path="/add/:side/:type">
          <AddItem />
        </Route>
        <Route exact path="/edit/:itemId">
          <EditItem />
        </Route>
        <Route exact path="/">
          <BalanceSheet onDeleteItem={deleteItemHandler} />
        </Route>
      </Switch>
      <AppFooter className="app__footer">
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
export default App
