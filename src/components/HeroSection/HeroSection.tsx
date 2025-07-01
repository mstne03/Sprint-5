import ButtonComponent from '../ButtonComponent/ButtonComponent'
import ImageBgdBlob from '../ImageBgdBlob/ImageBgdBlob'
import Image from '../../assets/Imagenes/illustration-hero.svg'

const HeroSection = () => (
  <section className="mx-7 flex flex-col justify-between space-y-70">
    <ImageBgdBlob 
      imgSrc={Image}
    />

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
        <ButtonComponent text="Get it on Chrome" textColor="text-white"/>
        
        <ButtonComponent text="Get it on Firefox" bg_color="bg-gray-100" textColor="text-gray-700"/>
      </span>
    </div>
  </section>
);

export default HeroSection;
