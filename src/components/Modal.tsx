import React, { useContext, useState } from 'react'
import styled, { css } from 'styled-components'
import PizzaContext from '../context'
import Increment from './Increment'
import PizzaSizes from './PizzaSizes'

const Background = styled.div<{ isOpen?: boolean }>`
  ${({ isOpen }) => css`
    display: ${isOpen ? 'block' : 'none'};
    width: 100vw;
    height: 100vh;
    position: fixed;
    inset: 0;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 500;
    overflow: scroll;
  `}
`

const Container = styled.div`
  width: 900px;
  display: flex;
  position: relative;
  padding: 1.5rem;
  margin: 3rem auto;
  z-index: 501;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 15px #999;
`

const PizzaImgArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    height: 400px;
    width: auto;
  }
`

const DetailsArea = styled.div`
  flex: 1;
`

const Title = styled.h2`
  font-size: 2rem;
  margin-top: 50px;
`

const Description = styled.p`
  font-size: 15px;
  color: #999;
  margin-top: 10px;
`

const Area = styled.div``

const Label = styled.p`
  color: #ccc;
  text-transform: uppercase;
  font-size: 14px;
  margin-top: 30px;
  margin-bottom: 10px;
`

const PriceArea = styled.div`
  display: flex;
  align-items: center;
`

const Price = styled.p`
  font-size: 28px;
  margin-right: 30px;
`

const ButtonArea = styled.div``

const ButtonAddToCart = styled.button`
  margin-top: 30px;
  padding: 20px 30px;
  border-radius: 20px;
  background-color: #48d05f;
  color: #fff;
  display: inline-block;
  cursor: pointer;
  margin-right: 30px;
  border: none;
`

const ButtonCancel = styled.button`
  display: inline-block;
  cursor: pointer;
  border: none;
  background-color: transparent;
`

type Props = {
  onCancel(): void
}

const Modal = ({ onCancel }: Props) => {
  const { isModalOpen, pizzaState, setCart, cart, setIsModalOpen } =
    useContext(PizzaContext)

  const [counter, setCounter] = useState(1)
  const [size, setSize] = useState('GRANDE')

  const handleAddToCart = () => {
    setCart([
      ...cart,
      {
        ...pizzaState,
        amount: counter,
        size,
      },
    ])
    setCounter(1)
    setIsModalOpen(false)
  }

  return (
    <Background isOpen={isModalOpen}>
      <Container>
        <PizzaImgArea>
          <img src={pizzaState.img} alt="Imagem da pizza escolhida" />
        </PizzaImgArea>
        <DetailsArea>
          <Title>{pizzaState.pizzaName || '---'}</Title>
          <Description>{pizzaState.description || '---'}</Description>
          <Area>
            <Label>TAMANHO</Label>
            <PizzaSizes
              size={size}
              setSize={setSize}
              sizes={pizzaState.sizes || ['']}
            />
          </Area>
          <Area>
            <Label>PREÇO</Label>
            <PriceArea>
              <Price>{`R$ ${pizzaState.price || '---'}`}</Price>
              <Increment
                counter={counter}
                setCounter={setCounter}
                pizza={pizzaState}
              />
            </PriceArea>
          </Area>
          <ButtonArea>
            <ButtonAddToCart onClick={() => handleAddToCart()}>
              Adicionar ao carrinho
            </ButtonAddToCart>
            <ButtonCancel onClick={onCancel}>Cancelar</ButtonCancel>
          </ButtonArea>
        </DetailsArea>
      </Container>
    </Background>
  )
}

export default Modal
