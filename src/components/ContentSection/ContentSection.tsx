import ContentTabs from '../ContentTabs/ContentTabs'

interface ContentSectionProps {
  
}

const ContentSection = (props:ContentSectionProps) => (
  <section className="my-30 mx-5 space-y-8">
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

    <ContentTabs/>
  </section>
);

export default ContentSection;
