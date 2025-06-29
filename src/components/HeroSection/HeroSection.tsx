import ButtonComponent from '../ButtonComponent/ButtonComponent'

interface HeroSectionProps {
  imgSrc: string
}

const HeroSection = (props: HeroSectionProps) => (
  <main className="mx-7 flex flex-col justify-between space-y-70">
    <div className="relative">
      <div className="
              after:content-['']
              after:absolute
              after:bg-blue-500
              after:rounded-full
              after:-z-10
              after:w-100
              after:h-45
              after:top-14
              after:left-10
            "
      >
        <img
          src={props.imgSrc}
          alt="hero-image"
          className="object-contain z-10 absolute right-3"
        />
      </div>
    </div>

    <div className="space-y-9">
      <div className="px-4 space-y-5">
        <h1 className="text-3xl text-center font-medium">
          A Simple Bookmark Manager
        </h1>

        <p className="text-center text-gray-400">
          A clean and simple interface to organize your 
          favourite websites. Open a new browser tab and 
          see your sites load instantly. Try it for free.
        </p>
      </div>

      <span className="flex justify-center items-center gap-3">
        <ButtonComponent text="Get it on Chrome" bg_color="bg-blue-500" text_color="text-white"/>
        
        <ButtonComponent text="Get it on Firefox" bg_color="bg-gray-100" text_color="text-gray-700"/>
      </span>
    </div>
  </main>
);

export default HeroSection;
