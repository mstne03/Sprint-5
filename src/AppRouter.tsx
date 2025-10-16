import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import HeaderSection from './components/HeaderSection/HeaderSection'
import logoImg from './assets/Imagenes/logo-taller.svg'

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="scroll-smooth">
        <HeaderSection 
          logoImg={logoImg}
        />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter
