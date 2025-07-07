import { useState } from 'react'
import TextTemplate from '../TextTemplate/TextTemplate'
import ContentTabs from './ContentTabs/ContentTabs'
import ContentSectionPages from './ContentSectionPages/ContentSectionPages'
import contentImage1 from '../../assets/Imagenes/illustration-features-tab-1.svg'
import contentImage2 from '../../assets/Imagenes/illustration-features-tab-2.svg'
import contentImage3 from '../../assets/Imagenes/illustration-features-tab-3.svg'

const ContentSection = () => {
  const [state, setState] = useState(0);

  const content = [
    { 
      key: 0, 
      imgSrc: contentImage1, 
      title: `Bookmark in one click`, 
      content: `
        Organize your bookmarks 
        however you like. 
        Our simple drag-and-drop 
        interface gives you complete 
        control over how you manage 
        your favourite sites.
        ` 
    },
    { key: 1, 
      imgSrc: contentImage2, 
      title: `Intelligent search`, 
      content: `
        Our powerful search feature 
        will help you find saved sites 
        in no time at all. No need to
        travel through all of your bookmarks.
        ` 
    },
    { key: 2, 
      imgSrc: contentImage3, 
      title: `Share your bookmarks`, 
      content: `
        Easily share your bookmarks and
        collections with others. Create
        a sharetable link that you can send
        at the click of a button.
        `
    },
  ];

  const activePage = content.find(page => page.key === state);

  return (
    <section className="my-30 md:my-25 lg:my-35 mx-5 space-y-14 flex flex-col justify-center items-center">
      <TextTemplate
        paddingX = "px-5 md:px-0 min-w-[360px] max-w-[360px]"
        title="Features"
        content="
          Our aim is to make it quick
          and easy for you to access your 
          favourite websites. Your bookmarks
          sync between your devices so you
          can access them on the go.
        "
      />

      <ContentTabs superState={state} setPageState={setState}/>

      {activePage && (
        <ContentSectionPages
          key={activePage.key}
          imgSrc={activePage.imgSrc}
          title={activePage.title}
          content={activePage.content}
          passBlobYValue = {
            activePage.key === 0 ? 
            "after:top-11 md:after:top-5 lg:after:top-32" 
            : "after:top-18 md:after:top-15 lg:after:top-48"
          }
        />
      )}
    </section>
  )
};

export default ContentSection;
