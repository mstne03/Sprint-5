interface ButtonComponentProps {
  text:string,
  bg_color:string,
  text_color:string,
  borders?:string,
  shadow?:string,
  isTab?:boolean,
  state?:number,
  pageState?:number,
  stateSet?: (value : number) => void
}

const ButtonComponent = ({
  text, 
  bg_color, 
  text_color, 
  borders = "border-2 border-transparent",
  shadow = "shadow-lg",
  isTab,
  state,
  pageState,
  stateSet
}: ButtonComponentProps) => (
  <button className={`
            cursor-pointer
            rounded-lg
            font-medium 
            px-4.5
            py-3.5
            w-auto
            ${shadow}
            ${bg_color} 
            ${text_color}
            ${borders}
            ${isTab ? "border-b-7" : ""}
            ${(pageState === state) && isTab ?
              "border-b-red-500" :
              ""
            }
            `}
          onClick = { () => {
            if (stateSet != undefined) {
              stateSet(state as number)
            }
          }}
  >
    {text}
  </button>
);

export default ButtonComponent;
