import TextTemplate from '../TextTemplate/TextTemplate'

interface FaqSectionProps {

}

const FaqSection = (props:FaqSectionProps) => (
  <section className="my-30">
    <TextTemplate
      paddingX="px-10"
      title="Frequently Asked Questions"
      titlePadding="px-2"
      content="
        Here are some of our FAQs. If you
        have any other questions you'd like 
        answered please feel free to email us.
      "
    />

    
  </section>
);

export default FaqSection;
