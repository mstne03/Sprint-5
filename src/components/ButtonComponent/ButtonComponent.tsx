interface ButtonComponentProps {
  text:string,
  bg_color?:string,
  textColor:string,
  paddingX?:string,
  paddingY?:string,
  borders?:string,
  shadow?:string,
  isTab?:boolean,
  state?:number,
  pageState?:number,
  stateSet?: (value : number) => void,
  passingFunction?: (value?:string | number) => void
}

const ButtonComponent = ({
  text,
  bg_color = "bg-blue-500",
  textColor,
  paddingX = "",
  paddingY = "",
  borders,
  shadow,
  isTab = false,
  state,
  pageState,
  stateSet,
  passingFunction
}: ButtonComponentProps) => (
  <button className={`
            cursor-pointer
            rounded-md
            font-medium
            w-auto
            p-3.5
            ${paddingX}
            ${paddingY}
            ${shadow}
            ${bg_color} 
            ${textColor}
            ${borders}
            ${isTab ? "border-b-7" : ""}
            ${
              (pageState === state) && isTab ?
              "border-b-red-500"
              : ""
            }
          `}
          onClick = { () => {
            if (stateSet != undefined && isTab) {
              stateSet(state as number)
            } else {
              passingFunction?.();
            }
          }}
  >
    {text}
  </button>
);

export default ButtonComponent;
