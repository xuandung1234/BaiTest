import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, Search, X } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-wider">
            MRITTIK
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/gallery">GALLERY</NavLink>
            <NavLink to="/pages">PAGES</NavLink>
            <NavLink to="/contacts">CONTACTS</NavLink>
            <NavLink to="/blog">BLOG</NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <motion.button 
              className="p-2 hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Search className="w-5 h-5" />
            </motion.button>
            <motion.button 
              className="p-2 hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Menu className="w-5 h-5" />
            </motion.button>
          </div>

          <motion.button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-white md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <NavLink to="/" mobile>HOME</NavLink>
              <NavLink to="/gallery" mobile>GALLERY</NavLink>
              <NavLink to="/pages" mobile>PAGES</NavLink>
              <NavLink to="/contacts" mobile>CONTACTS</NavLink>
              <NavLink to="/blog" mobile>BLOG</NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function NavLink({ to, children, mobile = false }) {
  return (
    <Link to={to}>
      <motion.span 
        className={`relative cursor-pointer ${
          mobile ? "text-2xl" : "hover:text-primary transition-colors"
        }`}
        whileHover={mobile ? { scale: 1.1 } : { }}
        whileTap={mobile ? { scale: 0.9 } : { }}
      >
        {children}
        {!mobile && (
          <motion.span 
            className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.span>
    </Link>
  )
}

