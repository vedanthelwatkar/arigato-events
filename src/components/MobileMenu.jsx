"use client"

import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Mail, Instagram } from "react-feather"
import { cn } from "../lib/utils"

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const location = useLocation()

  const closeMenu = () => {
    setIsOpen(false)
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Memberships", path: "/memberships" },
    { name: "Contact", path: "/contact" },
  ]

  const socialLinks = [
    { icon: <Phone size={18} />, label: "+91 92847 49367", href: "tel:+919284749367" },
    { icon: <Phone size={18} />, label: "+91 93566 66633", href: "tel:+919356666633" },
    { icon: <Mail size={18} />, label: "hello@arigato.com", href: "mailto:hello@arigato.com" },
    { icon: <Instagram size={18} />, label: "@arigatoevents", href: "https://www.instagram.com/arigatoevents/" },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-background"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <div className="h-[100dvh] flex flex-col pt-24 pb-8 px-6 overflow-y-auto">
            <nav className="flex-1 flex flex-col">
              <ul className="space-y-8 mb-12">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={closeMenu}
                      className={cn(
                        "text-3xl font-serif transition-colors hover:text-primary block",
                        location.pathname === link.path ? "text-primary" : "text-primary/70",
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm text-primary/70 mb-4"
                >
                  Connect with us
                </motion.p>

                <ul className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <a
                        href={link.href}
                        className="flex items-center text-sm text-primary/70 hover:text-primary transition-colors"
                      >
                        <span className="mr-3">{link.icon}</span>
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu
