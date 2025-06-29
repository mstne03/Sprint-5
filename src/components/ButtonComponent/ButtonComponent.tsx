interface ButtonComponentProps {
  text:string,
  bg_color:string,
  text_color:string,
  borders?:string,
  shadow?:string
}

const ButtonComponent = ({
  text, 
  bg_color, 
  text_color, 
  borders = "border-2 border-transparent",
  shadow = "shadow-lg"
}: ButtonComponentProps) => (
  <button className={`
            rounded-md 
            font-medium 
            px-4.5
            py-3.5
            ${shadow}
            ${bg_color} 
            ${text_color}
            ${borders}
            `} 
  >
    {text}
  </button>
);

export default ButtonComponent;
