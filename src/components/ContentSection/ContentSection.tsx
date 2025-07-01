import { useState } from 'react'
import ContentTabs from './ContentTabs/ContentTabs'
import ContentSectionPages from './ContentSectionPages/ContentSectionPages'
import contentImage from '../../assets/Imagenes/illustration-features-tab-1.svg'
import contentImage2 from '../../assets/Imagenes/illustration-features-tab-2.svg'
import contentImage3 from '../../assets/Imagenes/illustration-features-tab-3.svg'

interface ContentSectionProps {
  
}

const ContentSection = (props:ContentSectionProps) => {
  const [state, setState] = useState(0);

  const content = [];

  content.push(<ContentSectionPages key={0} imgSrc={contentImage} title="" content=""/>);
  content.push(<ContentSectionPages key={1} imgSrc={contentImage2} title="" content=""/>);
  content.push(<ContentSectionPages key={2} imgSrc={contentImage3} title="" content=""/>);

  return (
    <section className="my-30 mx-5 space-y-15">
      <div className="px-4 space-y-5">
        <h1 className="text-3xl text-center font-medium">
          Features
        </h1>

        <p className="text-center text-gray-400">
          Our aim is to make it quick and easy for you
          to access your favourite websites. Your bookmarks
          sync between your devices so you can access them 
          on the go.
        </p>
      </div>

      <ContentTabs superState={state} setPageState={setState}/>

      {content.map((page) => {
        if (page.key !== null && String(state) === page.key) {
          return page;
        }
        return;
      })}
    </section>
  )
};

export default ContentSection;
