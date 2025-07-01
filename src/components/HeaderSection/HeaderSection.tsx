import ButtonComponent from '../ButtonComponent/ButtonComponent'

interface HeaderSectionProps {
  logoImg : string,
  menuImg : string
}

const HeaderSection = (props: HeaderSectionProps) => (
  <header className="flex justify-between items-center py-12 px-10 md:px-20">
    <span>
      <img 
        className="object-contain max-w-35 sm:min-w-40"
        src={props.logoImg}
        alt="bookmark_logo"
      />
    </span>

    <span className="sm:hidden">
      <img 
        src={props.menuImg} 
        alt="hamburger_icon" 
      />
    </span>

    <nav className="hidden sm:flex sm:justify-center sm:items-center sm:gap-5">
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
