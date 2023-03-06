import React from 'react'
import styled, { css } from 'styled-components'
import Header from './components/Header'
import Main from './components/Main'
import { PizzaContextProvider } from './context'

const App = () => {
  return (
    <div className="App">
      <PizzaContextProvider>
        <Header />
        <Main />
      </PizzaContextProvider>
    </div>
  )
}

export default App
