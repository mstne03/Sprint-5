import ImageBgdBlob from '../../ImageBgdBlob/ImageBgdBlob' 

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

  <section className="mx-5 flex flex-col justify-between space-y-70">
    <ImageBgdBlob
      imgSrc = {imgSrc}
      blobXDirection = "after:right-10"
      blobYDirection = {passBlobYValue}
      imageYDirection = {passImageYValue}
    />

    <div className="space-y-4">
      <h1 className="text-2xl text-center font-medium">
        {title}
      </h1>

      <p className="text-center text-gray-400">
        {content}
      </p>
    </div>
  </section>
);

export default ContentSectionPages;
