import { IBalance } from './balanceTypes'

const LocalStorageInit = () => {
  if (localStorage.getItem('balance') === null) {
    const newBalance: IBalance = {
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
        {
          id: '1',
          side: 'activa',
          type: 'mid-term',
          title: 'loan',
          description: 'my appartment',
          amount: '23123.89',
        },
        {
          id: '2',
          side: 'activa',
          type: 'short-term',
          title: 'bill',
          description: 'my appartment',
          amount: '23123.89',
        },
        {
          id: '3',
          side: 'passiva',
          type: 'long-term',
          title: 'appartment',
          description: 'my appartment',
          amount: '23123.89',
        },
        {
          id: '4',
          side: 'passiva',
          type: 'mid-term',
          title: 'loan',
          description: 'my appartment',
          amount: '23123.89',
        },
        {
          id: '5',
          side: 'passiva',
          type: 'short-term',
          title: 'bill',
          description: 'my appartment',
          amount: '23123.89',
        },
      ],
    }
    localStorage.setItem('balance', JSON.stringify(newBalance))
  }
}

export default LocalStorageInit
