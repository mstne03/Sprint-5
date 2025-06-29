interface HeroSectionProps {
  imgSrc: string
}

const HeroSection = (props: HeroSectionProps) => (
  <main className="px-10 flex flex-col justify-between space-y-65">
    <div className="relative">
      <div className="
              after:content-['']
              after:absolute
              after:bg-blue-500
              after:rounded-full
              after:-z-10
              after:w-100
              after:h-45
              after:top-10
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

    <div className="space-y-7">
      <h1 className="text-3xl text-center font-medium">
        A Simple Bookmark Manager
      </h1>

      <p className="text-center">
        A clean and simple interface to organize your 
        favourite websites. Open a new browser tab and 
        see your sites load instantly. Try it for free.
      </p>

      
    </div>
  </main>
);

export default HeroSection;
