import ImageBgdBlob from '../../ImageBgdBlob/ImageBgdBlob' 
import ButtonComponent from '../../ButtonComponent/ButtonComponent'
import TextTemplate from '../../TextTemplate/TextTemplate'
interface ContentSectionPagesProps {
  imgSrc:string,
  title:string,
  content:string,
  passBlobYValue?:string,
}

const ContentSectionPages = ({
  imgSrc,
  title,
  content,
  passBlobYValue,
}:ContentSectionPagesProps) => (

  <div className="
          mx-5
          flex 
          flex-col 
          md:flex-row 
          space-y-25
          md:space-y-0
          md:gap-26
          md:justify-center
          sm:items-center
          md:mx-16
          lg:mx-40
        "
  >
    <div className="md:flex-1">
      <ImageBgdBlob
        imgSrc = {imgSrc}
        blobXDirection = "after:right-10"
        blobYDirection = {passBlobYValue}
        blobHeight = "after:md:h-65"
      />
    </div>

    <div className="space-y-4 md:flex-1">
      <TextTemplate
        title={title}
        content={content}
        textFlow="text-center md:text-left"
      />

      <div className="flex justify-center mt-7 md:justify-start">
        <ButtonComponent text="More info" bg_color="bg-blue-500" textColor="text-white"/>
      </div>
    </div>
  </div>
);

export default ContentSectionPages;
