import React, { createContext, Dispatch, SetStateAction, useState } from 'react'
import { PizzaItem } from '../types'

type PizzaContextProps = {
  pizzaState: PizzaItem
  setPizza: Dispatch<React.SetStateAction<PizzaItem>>

  isModalOpen: boolean
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>

  cart: PizzaItem[]
  setCart: Dispatch<React.SetStateAction<PizzaItem[]>>

  isCartOpen: boolean
  setIsCartOpen: Dispatch<React.SetStateAction<boolean>>
  clearCartContext: () => void
}

const PizzaContext = createContext<PizzaContextProps>({
  pizzaState: {},
  setPizza: () => {},
  isModalOpen: false,
  setIsModalOpen: () => {},
  cart: [],
  setCart: () => {},
  isCartOpen: false,
  setIsCartOpen: () => {},
  clearCartContext: () => {},
})

type Props = {
  children: React.ReactNode
}

const PizzaContextProvider = ({ children }: Props) => {
  const [pizzaState, setPizza] = useState<PizzaItem>({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [cart, setCart] = useState<PizzaItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const clearCartContext = () => setCart([])

  return (
    <PizzaContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        pizzaState,
        setPizza,
        cart,
        setCart,
        isCartOpen,
        setIsCartOpen,
        clearCartContext,
      }}
    >
      {children}
    </PizzaContext.Provider>
  )
}

export { PizzaContextProvider }
export default PizzaContext
