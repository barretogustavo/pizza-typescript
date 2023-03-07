import React, { useContext, useEffect, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import PizzaContext from '../context'
import PizzaCartItem from './PizzaCartItem'

const slideBottom = keyframes`
  0% {
    -webkit-transform: translateY(-400px);
    transform: translateY(-400px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`

const Container = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) => css`
    display: ${isOpen ? 'block' : 'none'};
    width: 100%;
    background-color: #9ccbe6;
    margin-top: -65px;
    padding: 1rem;
    border-radius: 0 0 2rem 2rem;
    -webkit-animation: ${slideBottom} 0.5s both;
    animation: ${slideBottom} 0.5s both;
  `}
`

const ButtonCart = styled.button`
  font-size: 1.8rem;
  border: none;
  background-color: transparent;
  cursor: pointer;

  & > span {
    font-size: 1.2rem;
  }
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

const Button = styled.button`
  padding: 20px 30px;
  border-radius: 20px;
  background-color: #48d05f;
  color: #fff;
  display: inline-block;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #42b856;
  }
`

const ButtonCancel = styled(Button)`
  margin-right: 1rem;
  background-color: #c72424;

  &:hover {
    background-color: #ac2525;
  }
`

const Total = styled.h3``

const Cart = () => {
  const { cart, setIsCartOpen, isCartOpen, clearCartContext } =
    useContext(PizzaContext)

  const subtotal = cart.reduce(
    (acc, item) => acc + (item.price || 0) * (item.amount || 1),
    0,
  )
  const discount = subtotal * 0.1
  const total = subtotal - discount

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleClearCart = () => {
    setIsCartOpen(false)
    clearCartContext()
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
          <span>{`(${cart.length})`}</span>
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
      {cart.map((item) => (
        <PizzaCartItem pizza={item} key={item.id} />
      ))}
      <Row>
        <Detail>Subtotal</Detail>
        <Price>{`R$ ${subtotal.toFixed(2)}`}</Price>
      </Row>
      <Row>
        <Detail>Desconto (-10%)</Detail>
        <Price>{`R$ ${discount.toFixed(2)}`}</Price>
      </Row>
      <Row>
        <Total>Total</Total>
        <Total>{`R$ ${total.toFixed(2)}`}</Total>
      </Row>
      <Row>
        <div />
        <div>
          <ButtonCancel onClick={() => handleClearCart()}>
            Cancelar pedido
          </ButtonCancel>
          <Button>Finalizar pedido</Button>
        </div>
      </Row>
    </Container>
  )
}

export default Cart
