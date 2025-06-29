interface ButtonComponentProps {
  text:string,
  bg_color:string,
  text_color:string
}

const ButtonComponent = (props:ButtonComponentProps) => (
  <button className={`
            rounded-md 
            font-medium 
            px-4.5
            py-3.5
            shadow-2xs
            ${props.bg_color} 
            ${props.text_color}
            `} 
  >
    {props.text}
  </button>
);

export default ButtonComponent;
