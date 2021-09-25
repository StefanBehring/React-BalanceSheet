export interface IItem {
  id: string
  side: string
  type: string
  title: string
  description: string
  amount: string
}

export interface IBalance {
  sides: string[]
  types: string[]
  items: IItem[]
}

export type FDeleteItem = (id: string) => void
