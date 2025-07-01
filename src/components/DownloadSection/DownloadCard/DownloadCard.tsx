import ButtonComponent from '../../ButtonComponent/ButtonComponent'

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
    <div className="px-4 space-y-4">
      <h1 className="text-2xl text-center font-medium">
        {props.title}
      </h1>

      <p className="text-center text-gray-400">
        {props.text}
      </p>
    </div>
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
