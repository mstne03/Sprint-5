import DownloadCard from './DownloadCard/DownloadCard'
import googleImg from '../../assets/Imagenes/logo-chrome.svg'
import firefoxImg from '../../assets/Imagenes/logo-firefox.svg'
import operaImg from '../../assets/Imagenes/logo-opera.svg'
import BgDots from '../../assets/Imagenes/bg-dots.svg'
import TextTemplate from '../TextTemplate/TextTemplate'

const DownloadSection = () => {
  const cards = [
    {key: 0, src: googleImg, title:"Add to Chrome", text:"Minimum version 62"},
    {key: 1, src: firefoxImg, title: "Add to Firefox", text: "Minimum version 55"},
    {key: 2, src: operaImg, title: "Add to Opera", text: "Minimum version 46"}
  ]

  return (
    <section className="space-y-15">
      <TextTemplate
        paddingX="px-10"
        title="Download the extension"
        content="
          We've got more browsers in the pipeline.
          Please let us know if you've got a favourite
          you'd like us to prioritize.
        "
      />

      <div className="mx-10 flex flex-col justify-center items-center gap-20">
        {cards.map((card) => 
            <DownloadCard 
              key={card.key}
              imgSrc={card.src}
              separator={BgDots}
              title={card.title}
              text={card.text}
            />
          )
        }
      </div>
    </section>
  )
};

export default DownloadSection;
