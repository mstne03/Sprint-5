import TextTemplate from '../TextTemplate/TextTemplate'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import FaqDetails from './FaqDetails/FaqDetails'
import iconArrow from '../../assets/Imagenes/icon-arrow.svg'

interface FaqSectionProps {

}

const FaqSection = (props:FaqSectionProps) => {
  type faqObject = {
    key:number,
    text:string,
    content:string
  }
  const faqs:faqObject[] = [];

  faqs.push({
    key: 0,
    text: "What is Bookmark?",
    content: "",
  });

  faqs.push({
    key: 1,
    text: "How can I request a new browser?",
    content: ""
  })

  faqs.push({
    key: 2,
    text: "Is there a mobile app?",
    content: ""
  })

  faqs.push({
    key: 3,
    text: "What about other Chromium browsers?",
    content: ""
  })

  return (
    <section className="my-30 flex flex-col justify-center items-center gap-20">
      <TextTemplate
        paddingX="max-w-[300px] md:max-w-[360px] md:min-w-[360px]"
        title="Frequently Asked Questions"
        content="
          Here are some of our FAQs. If you
          have any other questions you'd like 
          answered please feel free to email us.
        "
      />

      
      <div className="min-w-[500px]">
        {faqs.map((detail, i) => {
          return <FaqDetails
                    key={i}
                    text={detail.text}
                    icon={iconArrow}
                    borders={i === 0 ? "border-y-2 border-y-gray-200" 
                            : i === 2 ? "border-y-2 border-y-gray-200"
                            : i === 3 ? "border-b-2 border-b-gray-200"
                            : ""}
                  />
        })}

        <div className="flex justify-center items-center mt-10">
          <ButtonComponent
            text="More info"
            textColor="text-white"
          />
        </div>
      </div>
    </section>
  )
};

export default FaqSection;
