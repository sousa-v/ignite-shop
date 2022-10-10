import { AppProps } from 'next/app'

import { globalStyles } from '../styles/global'
import logoImg from '../assets/logo.svg'

import { AppContainer, Header } from '../styles/pages/app'
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <Header>
        <img src={logoImg.src} alt="" />
      </Header>
      <Component {...pageProps} />
    </AppContainer>
  )
}
