import './ContentSection.css';
import { contentSteps } from '@/data/contentSection/steps';
import { useContentSection } from '@/hooks/useContentSection';
import ContentDisplay from './ContentDisplay';
import StepsNavigation from './StepsNavigation';

const ContentSection = () => {
    const {
        selectedStep,
        currentContent,
        textRef,
        triangleRotation,
        renderTitle,
        renderTextParagraphs,
        handleArrowClick,
        handleStepChange
    } = useContentSection();

    return (
        <section id="essencia" className="bg-[#6b8ac6] py-20 px-4 sm:px-6 md:px-10 overflow-x-hidden">
            <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-0 lg:gap-16">
                {/* Contenido principal centrado */}
                <ContentDisplay 
                    currentContent={currentContent}
                    textRef={textRef}
                    triangleRotation={triangleRotation}
                    renderTitle={renderTitle}
                    renderTextParagraphs={renderTextParagraphs}
                    handleArrowClick={handleArrowClick}
                />

                {/* Navegación vertical a la derecha */}
                <StepsNavigation 
                    steps={contentSteps}
                    selectedStep={selectedStep}
                    handleStepChange={handleStepChange}
                />
            </div>
        </section>
    );
};
export default ContentSection;