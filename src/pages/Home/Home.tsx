import { motion } from 'framer-motion'
import logoTaller from '../../assets/Imagenes/logo-taller.svg'
import HeroSection from '../../components/HeroSection/HeroSection'
import ContentSection from '../../components/ContentSection/ContentSection'
import Services from '../../components/Services/Services'
import FooterSection from '../../components/FooterSection/FooterSection'

const Home = () => {
    return (
        <>
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                <HeroSection/>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                <ContentSection />
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                <Services />
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                <FooterSection srcLogo={logoTaller} />
            </motion.section>
        </>
    )
}

export default Home
