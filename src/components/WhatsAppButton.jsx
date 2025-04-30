"use client"

import { MessageCircle } from "react-feather"

const WhatsAppButton = () => {
  const phoneNumber = "919284749367" // Format: country code + number without + or spaces
  const message = "Hello, I'd like to inquire about your services."

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-primary text-background p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  )
}

export default WhatsAppButton
