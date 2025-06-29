interface HeroSectionProps {
  imgSrc : string
}

const HeroSection = (props : HeroSectionProps) => (
  <main className="px-10">
    <div className="
            relative
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
  </main>
);

export default HeroSection;
