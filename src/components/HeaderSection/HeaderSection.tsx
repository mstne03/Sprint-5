import ButtonComponent from '../ButtonComponent/ButtonComponent'

interface HeaderSectionProps {
  logoImg : string,
  menuImg : string
}

const HeaderSection = (props: HeaderSectionProps) => (
  <header className="flex justify-between items-center sm:gap-20 py-12 px-10 md:px-16 lg:px-40">
    <span>
      <img 
        className="object-contain max-w-35 sm:min-w-40"
        src={props.logoImg}
        alt="bookmark_logo"
      />
    </span>

    <span className="md:hidden">
      <img 
        src={props.menuImg} 
        alt="hamburger_icon" 
      />
    </span>

    <nav className="hidden md:flex md:justify-center md:items-center md:gap-10">
      <ul className="flex gap-6">
        <li>
          <a href="#">FEATURES</a>
        </li>
        <li>
          <a href="#">PRICING</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>

      <ButtonComponent
        text="LOGIN"
        textColor="text-white"
        bg_color="bg-red-500"
        paddingX="px-7"
        paddingY="py-3"
      />
    </nav>
  </header>
);

export default HeaderSection;
