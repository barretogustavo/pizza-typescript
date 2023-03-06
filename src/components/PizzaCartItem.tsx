import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import PizzaContext from '../context'
import { PizzaItem } from '../types'
import Increment from './Increment'

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #7db3d3;
`

const Gap = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`

const PizzaImage = styled.img`
  margin-right: 1rem;
`

const PizzaName = styled.p`
  & > span {
    margin-right: 1rem;
  }
`

type Props = {
  pizza: PizzaItem
}

const PizzaCartItem = ({ pizza }: Props) => {
  const [counter, setCounter] = useState(pizza.amount || 1)

  return (
    <Row>
      <Gap>
        <PizzaImage src={pizza.img} width={40} alt={pizza.pizzaName} />
        <PizzaName>
          {pizza.pizzaName} <span>(G)</span>
        </PizzaName>
      </Gap>
      <Increment counter={counter} setCounter={setCounter} />
    </Row>
  )
}

export default PizzaCartItem
