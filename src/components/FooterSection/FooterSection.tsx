import ButtonComponent from '../ButtonComponent/ButtonComponent'

interface FooterSectionProps {
  srcLogo:string,
}

const FooterSection= (props:FooterSectionProps) => (
  <footer>
    <div className="bg-blue-950 px-20 py-8 flex justify-between">
      <div className="flex items-center gap-9 md:gap-25">
        <span>
          <img 
            className="max-w-30"
            src={props.srcLogo} 
            alt="logo_bookmark"
          />
        </span>
        
        <nav className="text-white">
          <ul className="flex md:gap-20 gap-9">
            <li>
              <a className="hover:text-red-500" href="#">FEATURES</a>
            </li>
            <li>
              <a className="hover:text-red-500" href="#">PRICING</a>
            </li>
            <li>
              <a className="hover:text-red-500" href="#">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
);

export default FooterSection;
