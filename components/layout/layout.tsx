import React from 'react'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Menu } from '../menu/Menu'
import { Navbar } from '../navbar/Navbar'
import { VideoCards } from '../Videos/VideoCards'
import { darkTheme, lightTheme } from '../../utils/theme'
import { Container, Main, Wrapper } from '../../pages/indexStyles';
export default function Layout({children}:{children:React.ReactElement}){
    const [darkMode, setDarkMode] = useState(false);

  return (
     <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container>
      <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main>
        <Navbar />
        <Wrapper>
           { children }
     </Wrapper>
      </Main>
    </Container>
    </ThemeProvider>
  )
}
