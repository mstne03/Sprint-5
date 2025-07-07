import ButtonComponent from '../ButtonComponent/ButtonComponent'

interface FooterSectionProps {
  srcLogo:string,
  facebookLogo:string,
  twitterLogo:string
}

const FooterSection= (props:FooterSectionProps) => (
  <footer>
    <div className="p-15 flex flex-col justify-center gap-7 items-center bg-blue-500 text-white">
      <div className="space-y-7 text-center max-w-96">
        <p className="tracking-widest text-xs font-bold">
          35,000+ ALREADY JOINED
        </p>

        <h1 className="text-3xl font-bold">
          Stay up-to-date with what we're doing
        </h1>
      </div>

      <form action="submit" className="space-x-5">
        <input 
          type="email" 
          name="email" 
          id="email" 
          placeholder="Enter your email adress"
          className="
            bg-white
            text-gray-300
            px-6
            py-3.5
            rounded
            focus:outline-1
            transition
            duration-200
          "
        />
        <ButtonComponent
          text="Contact Us"
          textColor="text-white"
          bg_color="bg-red-500"
          isLogin={true}
          passingFunction={
            () => {

          }}
        />
      </form>
    </div>

    <div className="bg-blue-950 px-20 py-8 flex justify-between">
      <div className="flex gap-9 md:gap-25">
        <span>
          <img 
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

      <div className="flex gap-10 items-center">
        <span>
          <img src={props.facebookLogo} alt="" />
        </span>

        <span>
          <img src={props.twitterLogo} alt="" />
        </span>
      </div>
    </div>
  </footer>
);

export default FooterSection;
