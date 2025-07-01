import ButtonComponent from '../../ButtonComponent/ButtonComponent'

interface DownloadCardProps {
  imgSrc:string
}

const DownloadCard = (props:DownloadCardProps) => (
  <div>
    <span>
      <img src={props.imgSrc} alt="card_image"/>
    </span>
  </div>
);

export default DownloadCard;
