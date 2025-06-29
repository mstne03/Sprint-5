interface ButtonComponentProps {
  text:string,
  bg_color:string,
  text_color:string,
  borders?:string
}

const ButtonComponent = ({
  text, 
  bg_color, 
  text_color, 
  borders = ""
}: ButtonComponentProps) => (
  <button className={`
            rounded-md 
            font-medium 
            px-4.5
            py-3.5
            shadow-2xs
            ${bg_color} 
            ${text_color}
            `} 
  >
    {text}
  </button>
);

export default ButtonComponent;
