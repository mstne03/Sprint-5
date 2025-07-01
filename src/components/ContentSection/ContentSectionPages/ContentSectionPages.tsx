interface ContentSectionPagesProps {
  imgSrc:string,
  title:string,
  content:string,
}

const ContentSectionPages = (props:ContentSectionPagesProps) => (
  <section>
    <span>
      <img 
        src={props.imgSrc} 
        alt="content_image"
      />
    </span>

    <div>
      
    </div>
  </section>
);

export default ContentSectionPages;
