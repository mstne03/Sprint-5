import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Serveis from '@/pages/Serveis';
import QuiSom from '@/pages/QuiSom';
import HeaderSection from '@/components/layout/HeaderSection'
import FooterSection from '@/components/layout/FooterSection'
import logoImg from '@/assets/Imagenes/logo-taller.svg'

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="scroll-smooth">
        <HeaderSection 
          logoImg={logoImg}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/serveis" element={<Serveis />} />
          <Route path="/qui-som" element={<QuiSom />} />
        </Routes>
        <FooterSection 
          srcLogo={logoImg}
        />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter
