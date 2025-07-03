interface TextTemplateProps {
  paddingX?:string,
  spaceY?:string,
  title:string,
  titleSize?:string,
  titlePadding?:string,
  content:string,
  contentSize?:string,
  textFlow?:string
}

const TextTemplate = ({
  paddingX = "",
  spaceY = "space-y-4",
  title,
  titleSize = "text-2xl",
  titlePadding = "",
  content,
  contentSize = "",
  textFlow = "text-center"
}:TextTemplateProps) => (
    <div className={`
          ${paddingX} 
          ${spaceY}
          flex
          flex-col
          `}
        >
      <h1 className={`
            ${titleSize}
            ${titlePadding}
            ${textFlow} 
            font-medium
          `}
      >
        {title}
      </h1>

      <p className={`
          ${contentSize}
          ${textFlow} 
          text-gray-400
        `}
      >
        {content}
      </p>
    </div>
  );

export default TextTemplate;
