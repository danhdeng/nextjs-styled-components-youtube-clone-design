import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Menu } from '../components/menu/Menu'
import { Navbar } from '../components/navbar/Navbar'
import { VideoCards } from '../components/Videos/VideoCards'
import { darkTheme, lightTheme } from '../utils/theme'
import { Container, Main, Wrapper } from './indexStyles'
import Layout from '../components/layout/layout'
function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Layout>
           <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
