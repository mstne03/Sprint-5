import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { servicesData } from '@/data/serveis/servicesData'
import { ServiceSection } from '@/components/Serveis/ServiceSection'

const Serveis = () => {
    const location = useLocation();
    const [quoteIndices, setQuoteIndices] = useState<Record<string, number>>({
        artterapia: 0,
        artperdins: 0
    });

    useEffect(() => {
        // Scroll to section if hash is present
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    const headerOffset = 100; // Altura aproximada del header + margen
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }, 100);
            }
        }
    }, [location]);

    // Carousel automático para las citas
    useEffect(() => {
        const intervals = servicesData
            .filter(service => service.quotes.length > 0)
            .map(service => {
                return setInterval(() => {
                    setQuoteIndices(prev => ({
                        ...prev,
                        [service.id]: (prev[service.id] + 1) % service.quotes.length
                    }));
                }, 6000); // Cambia cada 6 segundos
            });

        return () => intervals.forEach(interval => clearInterval(interval));
    }, []);

    return (
        <>
            {/* Hero Section con fondo claro */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="bg-[#F5EFE7] py-32 px-4 sm:px-6 md:px-10 overflow-x-hidden"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-gray-800 text-2xl sm:text-4xl lg:text-5xl font-light tracking-wide leading-relaxed mb-6">
                        ELS NOSTRES SERVEIS
                    </h1>
                    <p className="text-gray-700 text-sm sm:text-lg lg:text-xl font-light leading-relaxed">
                        Descobreix com podem acompanyar-te en el teu procés creatiu
                    </p>
                </div>
            </motion.section>

            {/* Secciones de servicios */}
            {servicesData.map((service) => (
                <ServiceSection
                    key={service.id}
                    service={service}
                    quoteIndex={quoteIndices[service.id] || 0}
                />
            ))}
        </>
    )
}

export default Serveis
