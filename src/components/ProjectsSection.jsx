import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  { id: 1, category: "residential", image: "/images/project-1.jpg", title: "Modern House" },
  { id: 2, category: "commercial", image: "/images/project-2.jpg", title: "Office Complex" },
  { id: 3, category: "interior", image: "/images/project-3.jpg", title: "Luxury Apartment" },
  { id: 4, category: "landscape", image: "/images/project-4.jpg", title: "City Park" },
  { id: 5, category: "residential", image: "/images/project-5.jpg", title: "Beach House" },
  { id: 6, category: "commercial", image: "/images/project-6.jpg", title: "Shopping Mall" },
]

const categories = ["all", "residential", "commercial", "interior", "landscape"]

export function ProjectsSection() {
  const [filter, setFilter] = useState("all")

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Projects
        </motion.h2>
        <div className="flex justify-center mb-8">
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`mx-2 py-2 px-4 rounded-full ${filter === category ? 'bg-primary text-white' : 'bg-white'}`}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                layout
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

