import ButtonComponent from '@/components/ui/ButtonComponent';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

interface HeaderSectionProps {
  logoImg: string;
}

const HeaderSection = (props: HeaderSectionProps) => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setShow(false); // Oculta al hacer scroll hacia abajo
        setIsMenuOpen(false); // Cierra el menú al hacer scroll
      } else {
        setShow(true); // Muestra al hacer scroll hacia arriba
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [navigate]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.header
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: show ? 0 : -100, opacity: show ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-4 px-4 sm:px-6 md:px-10 bg-white text-gray-800 shadow-md overflow-x-hidden"
      >
        <span 
          className="hover:cursor-pointer transition-all ease-in-out duration-300"
          onClick={() => navigate("/")}
        >
          <img
            className="object-contain h-10 sm:h-12"
            src={props.logoImg}
            alt="taller dels sentits logo"
          />
        </span>

        {/* Menú desktop - oculto en mobile */}
        <nav className="hidden md:flex justify-center items-center gap-6 lg:gap-8">
          <ul className="flex gap-8 text-sm font-medium">
            <li>
              <Link 
                className="hover:text-[#7B8BC7] transition-colors duration-200" 
                to="/"
                onClick={() => setIsMenuOpen(false)}
              >
                INICI
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#7B8BC7] transition-colors duration-200" to="/serveis">SERVEIS</Link>
            </li>
            <li>
              <Link className="hover:text-[#7B8BC7] transition-colors duration-200" to="/qui-som">QUI SOM?</Link>
            </li>
          </ul>
          <ButtonComponent
            text="CONTACTA"
          />
        </nav>

        {/* Botón hamburguesa - visible solo en mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden hover:cursor-pointer z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`w-7 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-7 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`w-7 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </motion.header>

      {/* Modal menú mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white md:hidden overflow-x-hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8 px-4 sm:px-6 md:px-10">
              <ul className="flex flex-col items-center gap-8 text-lg sm:text-xl font-medium">
                <li>
                  <Link 
                    className="hover:text-[#7B8BC7] transition-colors duration-200" 
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    INICI
                  </Link>
                </li>
                <li>
                  <Link 
                    className="hover:text-[#7B8BC7] transition-colors duration-200" 
                    to="/serveis"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    SERVEIS
                  </Link>
                </li>
                <li>
                  <Link 
                    className="hover:text-[#7B8BC7] transition-colors duration-200" 
                    to="/qui-som"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    QUI SOM?
                  </Link>
                </li>
              </ul>
              <div onClick={() => setIsMenuOpen(false)}>
                <ButtonComponent text="CONTACTA" />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeaderSection;
