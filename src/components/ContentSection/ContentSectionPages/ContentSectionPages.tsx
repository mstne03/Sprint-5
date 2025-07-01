import ImageBgdBlob from '../../ImageBgdBlob/ImageBgdBlob' 

interface ContentSectionPagesProps {
  imgSrc:string,
  title:string,
  content:string,
}

const ContentSectionPages = (props:ContentSectionPagesProps) => (
  <section className="mx-7 flex flex-col justify-between space-y-70">
    <ImageBgdBlob
      imgSrc = {props.imgSrc}
    />

    <div className="space-y-9">
      <h1 className="text-2xl text-center font-medium">
        {props.title}
      </h1>


    </div>
  </section>
);

export default ContentSectionPages;
