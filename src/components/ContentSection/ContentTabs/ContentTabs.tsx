import ButtonComponent from '../../ButtonComponent/ButtonComponent'

interface ContentTabsProps {
  superState:number,
  setPageState: (state:number) => void
}

const ContentTabs = (props:ContentTabsProps) => {
  return (
    <div className="
              flex 
              flex-col 
              md:flex-row 
              justify-center
              md:mx-auto
              mx-2 
          "
    >
      <div className="
              flex 
              justify-center 
              border-y-1 
              border-y-gray-400
              md:border-b-1
              md:border-t-0
              md:border-b-gray-400
            "
      >
        <span className="flex justify-center">
          <ButtonComponent
            text="Simple Bookmarking"
            bg_color="bg-transparent"
            textColor=""
            borders = "border-2 border-transparent border-b-2 border-b-red"
            shadow = ""
            isTab = {true}
            state = {0}
            pageState = {props.superState}
            stateSet = {props.setPageState}
            paddingX = "px-10"
            paddingY = "py-6"
          />
        </span>
      </div>

      <div className="
              flex 
              justify-center
              md:border-b-1
              md:border-t-0
              md:border-b-gray-400
            "
      >
        <span className="flex justify-center">
          <ButtonComponent 
            text="Speedy Searching"
            bg_color="bg-transparent"
            textColor=""
            borders = "border-2 border-transparent border-b-2 border-b-red"
            shadow = ""
            isTab = {true}
            state = {1}
            pageState = {props.superState}
            stateSet = {props.setPageState}
            paddingX = "px-10"
            paddingY = "py-6"
          />
        </span>
      </div>

      <div className="
              flex 
              justify-center 
              border-y-1 
              border-y-gray-400
              md:border-y-0
              md:border-b-1
              md:border-t-0
              md:border-b-gray-400
          "
      >
        <span className="flex justify-center">
          <ButtonComponent 
            text="Easy Sharing"
            bg_color="bg-transparent"
            textColor=""
            borders = "border-2 border-transparent border-b-2 border-b-red"
            shadow = ""
            isTab = {true}
            state = {2}
            pageState = {props.superState}
            stateSet = {props.setPageState}
            paddingX = "px-10"
            paddingY = "py-6"
          />
        </span>
      </div>
    </div>
  )
};

export default ContentTabs;
