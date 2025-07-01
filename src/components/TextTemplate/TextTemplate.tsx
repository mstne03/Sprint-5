interface TextTemplateProps {
  paddingX?:string,
  spaceY?:string,
  title:string,
  titleSize?:string,
  titlePadding?:string,
  content:string,
  contentSize?:string
}

const TextTemplate = ({
  paddingX = "",
  spaceY = "space-y-4",
  title,
  titleSize = "text-2xl",
  titlePadding = "",
  content,
  contentSize = ""
}:TextTemplateProps) => (
  <div className={`
        ${paddingX} 
        ${spaceY}
        `}
      >
    <h1 className={`
          ${titleSize}
          ${titlePadding}
          text-center 
          font-medium
        `}
    >
      {title}
    </h1>

    <p className={`
        ${contentSize}
        text-center 
        text-gray-400
      `}
    >
      {content}
    </p>
  </div>
);

export default TextTemplate;
