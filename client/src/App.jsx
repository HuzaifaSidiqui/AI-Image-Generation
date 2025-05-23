import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {darkTheme, lightTheme} from './utils/Theme'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text_primary};
  overflow-X: hidden;
  overflow-Y: hidden;
  transition: all 0.2s ease;
`

const Wrapper = styled.div`
  height: 100%;
  ${'' /* position: relative: */}
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 3;
`
const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Wrapper>
          <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>} exact/>
              <Route path='/post' element={<CreatePost/>} exact/>
            </Routes>
          </BrowserRouter>
        </Wrapper>
      </Container>
    </ThemeProvider>
  )
}

export default App
