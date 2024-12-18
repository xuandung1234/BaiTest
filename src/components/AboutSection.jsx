import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <motion.div 
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="/images/about-us.jpg" 
              alt="About Us" 
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>
          <motion.div 
            className="w-full lg:w-1/2 lg:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">About Our Architecture Firm</h2>
            <p className="text-gray-600 mb-6">
              At Mrittik, we believe in the power of design to transform spaces and enrich lives. 
              Our team of passionate architects and designers work tirelessly to create innovative, 
              sustainable, and aesthetically pleasing structures that stand the test of time.
            </p>
            <p className="text-gray-600 mb-6">
              With a focus on client satisfaction and attention to detail, we bring dreams to life, 
              one project at a time. Our portfolio spans residential, commercial, and public spaces, 
              each telling a unique story of collaboration and creativity.
            </p>
            <motion.button 
              className="bg-primary text-white py-3 px-6 rounded-full font-semibold hover:bg-primary/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

