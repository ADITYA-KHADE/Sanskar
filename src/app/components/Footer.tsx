"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast({
          title: "Subscribed successfully!",
          description: "Thank you for subscribing to our newsletter.",
        });
        setEmail("");
      } else {
        throw new Error("Failed to subscribe");
      }
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Shop Agarbathi, Dhoop, Cones", href: "/shop" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  const availableAtLinks = [
    { name: "Amazon", href: "https://www.amazon.in/s?k=sanskar+agarbatti" },
    { name: "Flipkart", href: "https://www.flipkart.com/search?q=sanskar+agarbatti" },
    { name: "Snapdeal", href: "https://www.snapdeal.com/search?keyword=sanskar+agarbatti" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-rose-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-rose-200 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Available At */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Available At</h3>
            <ul className="space-y-3">
              {availableAtLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-rose-200 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2 lg:col-span-2">
            <form onSubmit={handleSubmit} className=" bg-primary/10 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
              <p className="mb-4">Stay updated with our latest products and offers!</p>
              <div className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit">Subscribe</Button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-rose-500">
          <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-sm text-center sm:text-left">
              © {currentYear}, <span className="font-semibold">Sanskar</span>. All rights reserved.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-rose-200 transition-colors" aria-label={label}>
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
