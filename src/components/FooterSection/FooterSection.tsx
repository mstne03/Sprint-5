import ButtonComponent from '../ButtonComponent/ButtonComponent'

interface FooterSectionProps {

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
          passingFunction={
            () => {

          }}
        />
      </form>
    </div>
  </footer>
);

export default FooterSection;
