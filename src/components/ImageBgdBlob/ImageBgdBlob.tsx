interface ImgBgdBlobProps {
  imgSrc:string,
  blobXDirection?:string,
  blobYDirection?:string
}

const ImgBgdBlob = ({
    imgSrc,
    blobXDirection = "after:left-10",
    blobYDirection = "after:top-14"
}:ImgBgdBlobProps) => (

  <div className="relative">
    <div className={`
      after:content-['']
      after:absolute
      after:bg-blue-500
      after:rounded-full
      after:-z-10
      after:w-100
      after:h-45
      ${blobYDirection}
      ${blobXDirection}
    `}
    >
      <img
        src={imgSrc}
        alt="hero-image"
        className="object-contain z-10 absolute right-3"
      />
    </div>
  </div>
);

export default ImgBgdBlob;
