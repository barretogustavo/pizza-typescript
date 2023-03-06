import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from './Modal'
import PizzaCard from './PizzaCard'

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 16px;
`

const Main = () => {
  const [isModalOpen, setIsModalOPen] = useState(true)

  return (
    <Container>
      <Grid>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </Grid>
      <Modal isOpen={isModalOpen} onCancel={() => setIsModalOPen(false)} />
    </Container>
  )
}

export default Main
