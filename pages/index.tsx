import type { NextPage } from 'next'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Menu } from '../components/menu/Menu'
import { Navbar } from '../components/navbar/Navbar'
import { VideoCards } from '../components/Videos/VideoCards'
import { darkTheme, lightTheme } from '../utils/theme'
import { Container, Main, Wrapper } from './indexStyles'


const Home: NextPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
     <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container>
      <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Main>
        <Navbar />
        <Wrapper>
          <h1>test</h1>
           <h1>test</h1>
            <h1>test</h1>
           <h1>test</h1>
            <h1>test</h1>
           <h1>test</h1>
            <h1>test</h1>
           <h1>test</h1>
            <h1>test</h1>
           <h1>test</h1>
            <h1>test</h1>
           <h1>test</h1>
            <h1>test</h1>
           <h1>test</h1>
            <h1>test</h1>
           <h1>test</h1>
            <h1>test</h1>
           <h1>test</h1>
            <h1>test</h1>
           <h1>test</h1>
            <h1>test</h1>
           <h1>test</h1>
            <h1>test</h1>
           <h1>test</h1>
        </Wrapper>
      </Main>
    </Container>
    </ThemeProvider>
  )
}

export default Home
