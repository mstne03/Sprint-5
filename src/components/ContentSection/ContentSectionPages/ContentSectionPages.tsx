import ImageBgdBlob from '../../ImageBgdBlob/ImageBgdBlob' 
import ButtonComponent from '../../ButtonComponent/ButtonComponent'
import TextTemplate from '../../TextTemplate/TextTemplate'
interface ContentSectionPagesProps {
  imgSrc:string,
  title:string,
  content:string,
  passBlobYValue?:string,
  passImageYValue?:string
}

const ContentSectionPages = ({
  imgSrc,
  title,
  content,
  passBlobYValue,
  passImageYValue = ""
}:ContentSectionPagesProps) => (

  <div className="mx-5 flex flex-col justify-between space-y-70">
    <ImageBgdBlob
      imgSrc = {imgSrc}
      blobXDirection = "after:right-10"
      blobYDirection = {passBlobYValue}
      imageYDirection = {passImageYValue}
    />

    <div className="space-y-4">
      <TextTemplate
        title={title}
        content={content}
      />

      <div className="flex justify-center mt-7">
        <ButtonComponent text="More info" bg_color="bg-blue-500" textColor="text-white"/>
      </div>
    </div>
  </div>
);

export default ContentSectionPages;
