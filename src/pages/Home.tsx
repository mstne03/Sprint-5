import { motion } from 'framer-motion'
import HeroSection from '@/components/Home/HeroSection'
import ContentSection from '@/components/Home/ContentSection/ContentSection'
import Services from '@/components/Home/Services'

const Home = () => {
    return (
        <>
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                <HeroSection/>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                <ContentSection />
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                <Services />
            </motion.section>
        </>
    )
}

export default Home
