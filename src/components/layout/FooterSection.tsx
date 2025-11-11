interface FooterSectionProps {
  srcLogo: string;
}

const FooterSection = (props: FooterSectionProps) => (
  <footer className="bg-[#3D4B7A] py-8 px-4 sm:px-6 md:px-10 overflow-x-hidden">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      {/* Logo */}
      <div className="flex items-center">
        <img 
          className="h-10 sm:h-12"
          src={props.srcLogo} 
          alt="Taller dels Sentits Logo"
        />
      </div>
      
      {/* Navigation Links */}
      <nav>
        <ul className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 text-white text-xs sm:text-sm tracking-wide">
          <li>
            <a className="hover:text-white/70 transition-colors duration-200" href="#essencia">
              ESSÈNCIA
            </a>
          </li>
          <li>
            <a className="hover:text-white/70 transition-colors duration-200" href="#serveis">
              SERVEIS
            </a>
          </li>
          <li>
            <a className="hover:text-white/70 transition-colors duration-200" href="#quisom">
              QUI SOM?
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default FooterSection;
