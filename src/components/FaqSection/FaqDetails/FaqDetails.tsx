import ButtonComponent from '../../ButtonComponent/ButtonComponent'
import { useState } from 'react'

interface FaqDetailsProps {
  text:string
  icon:string
  borders:string
}

const FaqDetails = (props:FaqDetailsProps) => {
  const [state, setState] = useState(false);

  return (
    <div className={`
                flex 
                justify-between 
                items-center 
                w-full
                hover:cursor-pointer
                ${props.borders}
          `}
          onClick={() => {
            
          }}
    >
      <p className="p-6">
        {props.text}
      </p>

      <span>
        <img src={props.icon} alt="icon_arrow" />
      </span>
    </div>
  )
};

export default FaqDetails;
