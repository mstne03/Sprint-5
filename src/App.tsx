import { useState } from 'react'
import HeaderSection from './components/HeaderSection/HeaderSection'
import bookmarkLogo from './assets/Imagenes/logo-bookmark.svg'
import menuImg from './assets/Imagenes/icon-hamburger.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HeaderSection 
      logoImg={bookmarkLogo}
      menuImg={menuImg}
    />
  )
}

export default App
