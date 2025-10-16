import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderSectionProps {
  logoImg: string;
}

const HeaderSection = (props: HeaderSectionProps) => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setShow(false); // Oculta al hacer scroll hacia abajo
      } else {
        setShow(true); // Muestra al hacer scroll hacia arriba
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: show ? 0 : -100, opacity: show ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-4 px-10 bg-white text-gray-800 shadow-md"
    >
      <span>
        <img
          className="object-contain h-12"
          src={props.logoImg}
          alt="taller dels sentits logo"
        />
      </span>

      <nav className="flex justify-center items-center gap-8">
        <ul className="flex gap-8 text-sm font-medium">
          <li>
            <a className="hover:text-[#7B8BC7] transition-colors duration-200" href="#">ESSÈNCIA</a>
          </li>
          <li>
            <a className="hover:text-[#7B8BC7] transition-colors duration-200" href="#">SERVEIS</a>
          </li>
          <li>
            <a className="hover:text-[#7B8BC7] transition-colors duration-200" href="#">QUI SOM?</a>
          </li>
        </ul>
        <ButtonComponent
          text="CONTACTA"
        />
      </nav>
    </motion.header>
  );
};

export default HeaderSection;
