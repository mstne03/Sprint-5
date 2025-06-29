import { useState } from 'react'
import HeaderSection from './components/HeaderSection/HeaderSection'
import bookmarkLogo from './assets/Imagenes/logo-bookmark.svg'
import menuImg from './assets/Imagenes/icon-hamburger.svg'
import HeroSection from './components/HeroSection/HeroSection'
import heroImg from './assets/Imagenes/illustration-hero.svg'
import ContentSection from './components/ContentSection/ContentSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderSection 
        logoImg={bookmarkLogo}
        menuImg={menuImg}
      />

      <HeroSection
      imgSrc={heroImg}
      />

      <ContentSection/>
    </>
  )
}

export default App
