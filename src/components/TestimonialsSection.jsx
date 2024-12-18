import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { motion } from "framer-motion"
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Homeowner",
    content: "Working with Mrittik was an absolute pleasure. They turned our dream home into a reality, exceeding our expectations at every turn."
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Business Owner",
    content: "The team at Mrittik brought innovation and creativity to our office redesign project. The result is a space that inspires our employees every day."
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Property Developer",
    content: "Mrittik's attention to detail and commitment to sustainability sets them apart. They're our go-to architects for all our development projects."
  }
]

export function TestimonialsSection() {
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
          What Our Clients Say
        </motion.h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

