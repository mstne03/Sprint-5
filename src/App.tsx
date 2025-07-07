import { useState } from 'react'
import HeaderSection from './components/HeaderSection/HeaderSection'
import bookmarkLogo from './assets/Imagenes/logo-bookmark.svg'
import menuImg from './assets/Imagenes/icon-hamburger.svg'
import HeroSection from './components/HeroSection/HeroSection'
import ContentSection from './components/ContentSection/ContentSection'
import DownloadSection from './components/DownloadSection/DownloadSection'
import FaqSection from './components/FaqSection/FaqSection'
import FooterSection from './components/FooterSection/FooterSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderSection 
        logoImg={bookmarkLogo}
        menuImg={menuImg}
      />

      <HeroSection/>

      <ContentSection/>

      <DownloadSection/>

      <FaqSection/>

      <FooterSection/>
    </>
  )
}

export default App
