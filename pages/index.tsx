import type { NextPage } from 'next'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Card from '../components/card/Card'
import { Menu } from '../components/menu/Menu'
import { Navbar } from '../components/navbar/Navbar'
import { VideoCards } from '../components/Videos/VideoCards'
import { darkTheme, lightTheme } from '../utils/theme'
import { Container } from './index.style'


const Home: NextPage = () => {

  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  )
}

export default Home
