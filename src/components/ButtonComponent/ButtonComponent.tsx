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

const ButtonComponent = (props: ButtonComponentProps) => (
  <button className={`
            cursor-pointer
            rounded-md
            font-medium 
            px-4.5
            py-3.5
            w-auto
            ${props.shadow}
            ${props.bg_color} 
            ${props.text_color}
            ${props.borders}
            ${props.isTab ? "border-b-7" : ""}
            ${(props.pageState === props.state) && props.isTab ?
              "border-b-red-500" :
              ""
            }
            `}
          onClick = { () => {
            if (props.stateSet != undefined) {
              props.stateSet(props.state as number)
            }
          }}
  >
    {props.text}
  </button>
);

export default ButtonComponent;
