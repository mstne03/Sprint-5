import { motion } from 'framer-motion';
import type { ServiceSection as ServiceSectionType } from '@/types/serveis.types';
import { QuoteCarousel } from './QuoteCarousel';
import { serviceContents } from '@/data/serveis/serviceContents';

interface ServiceSectionProps {
    service: ServiceSectionType;
    quoteIndex: number;
}

export const ServiceSection = ({ service, quoteIndex }: ServiceSectionProps) => {
    const ContentComponent = serviceContents[service.contentKey];

    return (
        <motion.section
            id={service.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: service.delay }}
            className={`${service.bgColor} py-20 px-4 sm:px-6 md:px-10 scroll-mt-24 overflow-x-hidden`}
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-[#7B8BC7] text-lg sm:text-3xl lg:text-4xl font-light tracking-[0.2em] mb-3 text-center">
                    {service.title}
                </h2>
                
                <p className="text-gray-700 text-base sm:text-xl text-center mb-4 font-light italic">
                    {service.subtitle}
                </p>

                <QuoteCarousel quotes={service.quotes} currentIndex={quoteIndex} />

                <ContentComponent />
            </div>
        </motion.section>
    );
};
