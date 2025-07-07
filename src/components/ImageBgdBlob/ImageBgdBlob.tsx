interface ImgBgdBlobProps {
  imgSrc:string,
  blobHeight?:string,
  blobXDirection?:string,
  blobYDirection?:string,
}

const ImgBgdBlob = ({
    imgSrc,
    blobHeight = "after:md:h-64 after:lg:h-72",
    blobXDirection = "after:left-10 after:sm:left-35",
    blobYDirection = "after:top-14 after:lg:top-42",
}:ImgBgdBlobProps) => (

  <div className={`
        relative
        max-w-[350px]
        max-h-[200px]
        md:max-w-[700px]
        md:max-h-[600px]
        after:content-['']
        after:absolute
        after:bg-blue-500
        after:rounded-full
        after:-z-10
        after:w-250
        after:h-48 
        ${blobHeight}
        ${blobYDirection}
        ${blobXDirection}
      `}
  >
    <img
      src={imgSrc}
      alt="hero-image"
      className={`
        object-contain  
        max-h-full
        max-w-full
      `}
    />
  </div>
);

export default ImgBgdBlob;
