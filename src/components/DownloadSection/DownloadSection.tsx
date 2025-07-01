import DownloadCard from './DownloadCard/DownloadCard'
import googleImg from '../../assets/Imagenes/logo-chrome.svg'
import firefoxImg from '../../assets/Imagenes/logo-firefox.svg'
import operaImg from '../../assets/Imagenes/logo-opera.svg'

interface DownloadSectionProps {

}

const DownloadSection = (props:DownloadSectionProps) => {
  const cards = [
    {key: 0, src: googleImg},
    {key: 1, src: firefoxImg},
    {key: 2, src: operaImg}
  ]

  return (
    <div className="space-y-15">
      <div className="px-4 space-y-4">
        <h1 className="text-2xl text-center font-medium">
          Download the extension
        </h1>

        <p className="mx-4 text-center text-gray-400">
          We've got more browsers in the pipeline.
          Please let us know if you've got a favourite
          you'd like us to prioritize.
        </p>
      </div>

      <div>
        {cards.map((card) => {
          return <DownloadCard 
                  key={card.key}
                  imgSrc={card.src}
                />;
        })}
      </div>
    </div>
  )
};

export default DownloadSection;
