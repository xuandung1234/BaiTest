import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    id: 1,
    title: "THE FUTURE ARCHITECTURE IS HERE",
    subtitle: "Mrittik Architecture Creates Beauty in structures",
    image: "/images/hero-1.jpg"
  },
  {
    id: 2,
    title: "DESIGNING TOMORROW'S SPACES",
    subtitle: "Innovation Meets Aesthetic Excellence",
    image: "/images/hero-2.jpg"
  },
  {
    id: 3,
    title: "CRAFTING URBAN LANDSCAPES",
    subtitle: "Where Vision Becomes Reality",
    image: "/images/hero-3.jpg"
  }
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-wider max-w-4xl mx-auto mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl opacity-80"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      <SliderButton onClick={prevSlide} className="left-4">
        <ChevronLeft className="w-6 h-6" />
      </SliderButton>
      <SliderButton onClick={nextSlide} className="right-4">
        <ChevronRight className="w-6 h-6" />
      </SliderButton>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-8">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`text-white/80 hover:text-white transition-colors text-lg font-light ${
              currentSlide === index ? "text-white" : ""
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {String(index + 1).padStart(2, "0")}
          </motion.button>
        ))}
      </div>
    </div>
  )
}

function SliderButton({ onClick, className, children }) {
  return (
    <motion.button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 p-2 rounded-full border border-white/20 bg-black/20 text-white hover:bg-black/40 transition-colors ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
  )
}

