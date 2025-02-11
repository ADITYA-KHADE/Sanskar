"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+919999999999" // Use env variable
  const message = "Hi! I would like to know more about your products."

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 rounded-full bg-green-500 shadow-lg flex items-center justify-center "
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </Button>
  )
}
