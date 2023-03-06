import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import PizzaContext from '../context'
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
  const { setIsModalOpen } = useContext(PizzaContext)

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
      <Modal onCancel={() => setIsModalOpen(false)} />
    </Container>
  )
}

export default Main
