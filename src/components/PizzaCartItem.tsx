import React from 'react'
import styled from 'styled-components'
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

const PizzaCartItem = () => {
  return (
    <Row>
      <Gap>
        <PizzaImage
          src="https://github.com/barretogustavo/Ecommerce-Pizza/blob/main/images/pizza.png?raw=true"
          width={40}
          alt="Pizza"
        />
        <PizzaName>
          Mussarela <span>(G)</span>
        </PizzaName>
      </Gap>
      <Increment />
    </Row>
  )
}

export default PizzaCartItem
