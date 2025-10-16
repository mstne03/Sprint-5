interface TextTemplateProps {
  title:string,
  subtitle:string,
  content:string,
}

const TextTemplate = ({
  title,
  subtitle,
  content,
}:TextTemplateProps) => (
    <div className="
      flex 
      flex-col 
      text-center 
      gap-5
      px-10
      md:px-30
    ">
      <h2
        className="text-[17px] italic"
      >
        {subtitle}
      </h2>
      <h1 className="
        font-medium 
        text-4xl
      ">
        {title}
      </h1>

      <p className="">
        {content}
      </p>
    </div>
  );

export default TextTemplate;
