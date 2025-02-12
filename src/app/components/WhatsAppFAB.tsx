"use client";

import { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+919999999999"; // Use env variable
  const message = "Hi! I would like to know more about your products.";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleCallClick = () => {
    window.open(`tel:${phoneNumber}`, "_self");
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end space-y-2">
      {isOpen && (
        <>
          <Button
            onClick={handleWhatsAppClick}
            className="rounded-full bg-green-500 shadow-lg flex items-center justify-center w-12 h-12"
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </Button>

          <Button
            onClick={handleCallClick}
            className="rounded-full bg-green-400 shadow-lg flex items-center justify-center w-12 h-12"
          >
            <Phone className="w-6 h-6 text-white" />
          </Button>
        </>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full bg-purple-500 shadow-lg flex items-center justify-center w-12 h-12"
      >
        <X className="w-6 h-6 text-white" />
      </Button>
    </div>
  );
}
