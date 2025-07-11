import { useState } from 'react'
import HeaderSection from './components/HeaderSection/HeaderSection'
import bookmarkLogo from './assets/Imagenes/logo-bookmark.svg'
import whiteBookmarkLogo from './assets/Imagenes/logo-bookmark-white.svg'
import menuImg from './assets/Imagenes/icon-hamburger.svg'
import HeroSection from './components/HeroSection/HeroSection'
import ContentSection from './components/ContentSection/ContentSection'
import DownloadSection from './components/DownloadSection/DownloadSection'
import FaqSection from './components/FaqSection/FaqSection'
import FooterSection from './components/FooterSection/FooterSection'
import facebookLogo from './assets/Imagenes/icon-facebook.svg'
import twitterLogo from './assets/Imagenes/icon-twitter.svg'

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

      <FooterSection
        srcLogo={whiteBookmarkLogo}
        facebookLogo={facebookLogo}
        twitterLogo={twitterLogo}
      />
    </>
  )
}

export default App
