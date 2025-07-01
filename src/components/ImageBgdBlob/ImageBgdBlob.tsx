interface ImgBgdBlobProps {
  imgSrc:string,
  blobXDirection?:string,
  blobYDirection?:string,
  imageYDirection?:string
}

const ImgBgdBlob = ({
    imgSrc,
    blobXDirection = "after:left-10",
    blobYDirection = "after:top-14",
    imageYDirection = ""
}:ImgBgdBlobProps) => (

  <div className="relative">
    <div className={`
      after:content-['']
      after:absolute
      after:bg-blue-500
      after:rounded-full
      after:-z-10
      after:w-200
      after:sm:w-300
      after:h-45
      after:sm:h-72
      ${blobYDirection}
      ${blobXDirection}
    `}
    >
      <img
        src={imgSrc}
        alt="hero-image"
        className={`
          object-contain 
          z-10 
          absolute 
          right-3 
          sm:max-w-[500px]
          md:max-w-none
          ${imageYDirection}
        `}
      />
    </div>
  </div>
);

export default ImgBgdBlob;
