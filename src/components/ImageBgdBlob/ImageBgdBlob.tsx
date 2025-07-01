interface ImgBgdBlobProps {
  imgSrc:string,
  blobDirection?:string
}

const ImgBgdBlob = (props:ImgBgdBlobProps) => (
  <div className="relative">
    <div className="
            after:content-['']
            after:absolute
            after:bg-blue-500
            after:rounded-full
            after:-z-10
            after:w-100
            after:h-45
            after:top-14
            after:left-10
          "
    >
      <img
        src={props.imgSrc}
        alt="hero-image"
        className="object-contain z-10 absolute right-3"
      />
    </div>
  </div>
);

export default ImgBgdBlob;
