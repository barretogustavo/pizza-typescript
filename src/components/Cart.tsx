import React, { useContext, useState } from 'react'
import styled, { css } from 'styled-components'
import PizzaContext from '../context'
import PizzaCartItem from './PizzaCartItem'

const Container = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) => css`
    display: ${isOpen ? 'block' : 'none'};
    width: 100%;
    background-color: #9ccbe6;
    margin-top: -65px;
    padding: 1rem;
  `}
`

const ButtonCart = styled.button`
  font-size: 1.8rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0 1rem 0;
  border-bottom: 1px solid #7db3d3;
`

const Header = styled.div`
  padding-right: 1rem;
  margin-top: -30px;
  position: fixed;
  right: 0;
`

const Title = styled.h2``

const Detail = styled.span`
  font-weight: bold;
  color: #315970;
`

const Price = styled.span`
  color: #315970;
`

const Total = styled.h3``

const Cart = () => {
  const { cart, setIsCartOpen, isCartOpen } = useContext(PizzaContext)

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (cart.length && !isCartOpen) {
    return (
      <Header>
        <ButtonCart
          onClick={() => {
            setIsCartOpen(true)
            handleScrollToTop()
          }}
        >
          🛒
        </ButtonCart>
      </Header>
    )
  }

  return (
    <Container isOpen={isCartOpen}>
      <Row>
        <div />
        <ButtonCart onClick={() => setIsCartOpen(false)}>❌</ButtonCart>
      </Row>
      <PizzaCartItem />
      <PizzaCartItem />
      <PizzaCartItem />
      <Row>
        <Detail>Subtotal</Detail>
        <Price>R$ 238.70</Price>
      </Row>
      <Row>
        <Detail>Desconto (-10%)</Detail>
        <Price>R$ 23.87</Price>
      </Row>
      <Row>
        <Total>Total</Total>
        <Total>R$ 214.83</Total>
      </Row>
    </Container>
  )
}

export default Cart
