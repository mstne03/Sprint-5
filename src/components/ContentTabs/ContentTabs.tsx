import ButtonComponent from '../ButtonComponent/ButtonComponent'

interface ContentTabsProps {
  
}

const ContentTabs = (props:ContentTabsProps) => {
  return (
    <div className="flex flex-col justify-center mx-2">
      <div className="flex flex-col justify-center border-y-1 border-y-gray-400">
        <ButtonComponent
          text="Simple Bookmarking"
          bg_color="bg-transparent"
          text_color=""
          borders = "border-2 border-transparent border-b-2 border-b-red"
          shadow = ""
        />
      </div>

      <div className="flex flex-col justify-center border-y-1 border-y-gray-400">
        <ButtonComponent 
          text="Speedy Searching"
          bg_color="bg-transparent"
          text_color=""
          borders = "border-2 border-transparent border-b-2 border-b-red"
          shadow = ""
        />
      </div>

      <div className="flex flex-col justify-center border-y-1 border-y-gray-400">
        <ButtonComponent 
          text="Easy Sharing"
          bg_color="bg-transparent"
          text_color=""
          borders = "border-2 border-transparent border-b-2 border-b-red"
          shadow = ""
        />
      </div>
    </div>
  )
};

export default ContentTabs;
