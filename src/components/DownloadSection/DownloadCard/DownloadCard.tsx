import ButtonComponent from '../../ButtonComponent/ButtonComponent'
import TextTemplate from '../../TextTemplate/TextTemplate'

interface DownloadCardProps {
  imgSrc:string,
  separator:string,
  title:string,
  text:string
}

const DownloadCard = (props:DownloadCardProps) => (
  <div className="shadow-lg flex flex-col gap-6 justify-center items-center pt-10 pb-7 px-1 rounded-b-2xl">
    <span>
      <img src={props.imgSrc} alt="card_image"/>
    </span>
    <TextTemplate
      title={props.title}
      content={props.text}
    />

    <div className="w-full">
      <img 
        src={props.separator} 
        alt="bg_dots"
      />
    </div>
    
    <div>
      <ButtonComponent 
        text="Add & Install Extension" 
        bg_color="bg-blue-500" 
        text_color="text-white" 
        shadow="shadow-lg"
        paddingX="px-9"
      />
    </div>
  </div>
);

export default DownloadCard;
