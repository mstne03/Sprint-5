
interface HeaderSectionProps {
  logoImg : string,
  menuImg : string
}

const HeaderSection = (props: HeaderSectionProps) => (
  <header className="flex justify-between items-center py-12 px-10">
    <span>
      <img 
        className="object-contain max-w-35"
        src={props.logoImg}
        alt="bookmark_logo"
      />
    </span>

    <span>
      <img 
        src={props.menuImg} 
        alt="hamburger_icon" 
      />
    </span>
  </header>
);

export default HeaderSection;
