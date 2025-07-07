import ButtonComponent from '../ButtonComponent/ButtonComponent'
import ImageBgdBlob from '../ImageBgdBlob/ImageBgdBlob'
import Image from '../../assets/Imagenes/illustration-hero.svg'
import TextTemplate from '../TextTemplate/TextTemplate'

const HeroSection = () => (
  <section className="
              flex 
              flex-col 
              justify-between
              items-center
              space-y-3
              md:space-y-0
              gap-20
              md:gap-0
              md:ms-16 
              lg:ms-40
              md:justify-normal
              md:flex-row-reverse
            "
  >
    <div className="flex-1/2">
      <ImageBgdBlob 
        imgSrc={Image}
      />
    </div>

    <div className="
          flex-1/2
          space-y-9 
          mx-7
          md:max-w-[45%]
          sm:mx-32
          md:mx-0
          md:relative
        "
    >
      <TextTemplate
        title="A Simple Bookmark Manager"
        content="
          A clean and simple interface to organize
          your favourite websites. Open a new browser
          tab and see your sites load instantly. Try
          it for free
        "
        titleSize="text-3xl"
        spaceY="space-y-5"
        textFlow="text-center md:text-left"
        titlePadding="lg:me-27"
        contentSize="lg:pe-22"
      />

      <div className="flex justify-center md:justify-start items-center gap-2">
        <ButtonComponent text="Get it on Chrome" textColor="text-white"/>
        
        <ButtonComponent text="Get it on Firefox" bg_color="bg-gray-100" textColor="text-gray-700"/>
      </div>
    </div>
  </section>
);

export default HeroSection;
