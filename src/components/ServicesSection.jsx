import { motion } from "framer-motion"
import { Paintbrush, Building2, Ruler, Users } from 'lucide-react'

const services = [
  {
    icon: Paintbrush,
    title: "Interior Design",
    description: "Transform your space with our expert interior design services."
  },
  {
    icon: Building2,
    title: "Architecture",
    description: "Innovative architectural solutions for residential and commercial projects."
  },
  {
    icon: Ruler,
    title: "Planning",
    description: "Comprehensive planning services to bring your vision to life."
  },
  {
    icon: Users,
    title: "Exterior Design",
    description: "Create stunning exteriors that leave a lasting impression."
  }
]

export function ServicesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <service.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

