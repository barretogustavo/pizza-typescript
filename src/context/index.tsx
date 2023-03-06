import React, { createContext, Dispatch, SetStateAction, useState } from 'react'

type PizzaItem = {
  pizzaName?: string
  description?: string
  price?: number
  size?: string
  amount?: number
  image?: string
}

type PizzaContextProps = {
  pizzaState: PizzaItem
  setPizza: Dispatch<React.SetStateAction<PizzaItem>>

  isModalOpen: boolean
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>

  cart: PizzaItem[]
  setCart: Dispatch<React.SetStateAction<PizzaItem[]>>

  isCartOpen: boolean
  setIsCartOpen: Dispatch<React.SetStateAction<boolean>>
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
})

type Props = {
  children: React.ReactNode
}

const PizzaContextProvider = ({ children }: Props) => {
  const [pizzaState, setPizza] = useState<PizzaItem>({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [cart, setCart] = useState<PizzaItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

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
      }}
    >
      {children}
    </PizzaContext.Provider>
  )
}

export { PizzaContextProvider }
export default PizzaContext
