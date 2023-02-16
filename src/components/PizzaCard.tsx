import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 250px;
  height: 350px;
  margin: 0 auto;
`

const PizzaArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ImgArea = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0px 10px 50px rgb(0 0 0 / 20%);
`

const AddButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #388bc5;
  text-align: center;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  margin-top: -35px;
  transition: all ease 0.2s;
  border: none;

  &:hover {
    background-color: #286d9e;
  }
`

const Price = styled.span`
  font-size: 15px;
  color: #333;
  margin-top: 5px;
`

const Name = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin-top: 5px;
`

const Description = styled.p`
  font-size: 13px;
  color: #555;
  margin-top: 10px;
  text-align: center;
`

const PizzaCard = () => (
  <Container>
    <PizzaArea>
      <ImgArea>
        <img
          src="https://github.com/barretogustavo/Ecommerce-Pizza/blob/main/images/pizza.png?raw=true"
          width={200}
          alt="Imagem ilustrativa da pizza"
        />
      </ImgArea>
      <AddButton>+</AddButton>
      <Price>R$ 20.19</Price>
      <Name>Mussarela</Name>
      <Description>
        Descrição da pizza em mais de uma linha muito legal bem interessante
      </Description>
    </PizzaArea>
  </Container>
)

export default PizzaCard
