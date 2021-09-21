import './App.css'
import BalanceSheet from '../BalanceSheet/BalanceSheet'
import LocalStorageInit from './LocalStorageInit'
import { useState } from 'react'
import ItemFormular from '../ItemFormular/ItemFormular'

function App() {
  // LocalStorage init
  LocalStorageInit()

  const [page, setPage] = useState('main')
  const [side, setSide] = useState('')
  const [type, setType] = useState('')
  const [itemId, setItemId] = useState('')
  const [balanceLocalStorage, setBalanceLocalStorage] = useState(
    JSON.parse(localStorage.getItem('balance'))
  )

  const changePageHandler = (job, doSide, doType, doId) => {
    setPage(job)
    setSide(doSide)
    setType(doType)
    setItemId(doId)
  }

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

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Balance Sheet</h1>
      </header>
      {page === 'main' ? (
        <BalanceSheet
          balanceLocalStorage={balanceLocalStorage}
          onChangePage={changePageHandler}
          onDeleteItem={deleteItemHandler}
        />
      ) : (
        ''
      )}
      {page === 'add' ? (
        <ItemFormular job={page} side={side} type={type} />
      ) : (
        ''
      )}
      {page === 'edit' ? <ItemFormular job={page} id={itemId} /> : ''}
      <footer className="app__footer">
        <a
          href="https://github.com/StefanBehring/React-Privatbilanz"
          target="_blank"
          rel="noreferrer"
        >
          A github project
        </a>
        <p>by: Stefan Behring</p>
      </footer>
    </div>
  )
}

export default App
