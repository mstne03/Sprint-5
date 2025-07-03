interface ImgBgdBlobProps {
  imgSrc:string,
  blobXDirection?:string,
  blobYDirection?:string,
  imageYDirection?:string
}

const ImgBgdBlob = ({
    imgSrc,
    blobXDirection = "after:left-10 after:sm:left-20",
    blobYDirection = "after:top-14 after:lg:top-32",
    imageYDirection = ""
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
        after:w-200
        after:h-48
        after:md:h-64
        after:lg:h-82
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
        ${imageYDirection}
      `}
    />
  </div>
);

export default ImgBgdBlob;
