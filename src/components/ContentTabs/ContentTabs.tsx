import ButtonComponent from '../ButtonComponent/ButtonComponent'
import { useState } from 'react'

interface ContentTabsProps {
  
}

const ContentTabs = (props:ContentTabsProps) => {
  const [state, setState] = useState(0)

  return (
    <div className="flex flex-col justify-center mx-2">
      <div className="flex flex-col justify-center border-y-1 border-y-gray-400">
        <span className="flex justify-center">
          <ButtonComponent
            text="Simple Bookmarking"
            bg_color="bg-transparent"
            text_color=""
            borders = "border-2 border-transparent border-b-2 border-b-red"
            shadow = ""
            isTab = {true}
            state = {0}
            pageState = {state}
            stateSet = {setState}
          />
        </span>
      </div>

      <div className="flex flex-col justify-center border-y-1 border-y-gray-400">
        <span className="flex justify-center">
          <ButtonComponent 
            text="Speedy Searching"
            bg_color="bg-transparent"
            text_color=""
            borders = "border-2 border-transparent border-b-2 border-b-red"
            shadow = ""
            isTab = {true}
            state = {1}
            pageState = {state}
            stateSet = {setState}
          />
        </span>
      </div>

      <div className="flex flex-col justify-center border-y-1 border-y-gray-400">
        <span className="flex justify-center">
          <ButtonComponent 
            text="Easy Sharing"
            bg_color="bg-transparent"
            text_color=""
            borders = "border-2 border-transparent border-b-2 border-b-red"
            shadow = ""
            isTab = {true}
            state = {2}
            pageState = {state}
            stateSet = {setState}
          />
        </span>
      </div>
    </div>
  )
};

export default ContentTabs;
