import ButtonComponent from '../ButtonComponent/ButtonComponent'
import ImageBgdBlob from '../ImageBgdBlob/ImageBgdBlob'
import Image from '../../assets/Imagenes/illustration-hero.svg'
import TextTemplate from '../TextTemplate/TextTemplate'

const HeroSection = () => (
  <section className="mx-7 flex flex-col justify-between space-y-70">
    <ImageBgdBlob 
      imgSrc={Image}
    />

    <div className="space-y-9">
      <TextTemplate
        title="A simple bookmark manager"
        content="
          A clean and simple interface to organize
          your favourite websites. Open a new browser
          tab and see your sites load instantly. Try
          it for free
        "
        titleSize="text-3xl"
        spaceY="space-y-5"
      />

      <div className="flex justify-center items-center gap-3">
        <ButtonComponent text="Get it on Chrome" textColor="text-white"/>
        
        <ButtonComponent text="Get it on Firefox" bg_color="bg-gray-100" textColor="text-gray-700"/>
      </div>
    </div>
  </section>
);

export default HeroSection;
