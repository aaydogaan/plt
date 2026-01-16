"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#hizmetler", label: "Hizmetler" },
    { href: "#oduller", label: "Ödüller" },
    { href: "#süreç", label: "Süreç" },
    { href: "#yetenekler", label: "Yetenekler" },
    { href: "#iletisim", label: "İletişim" },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col font-sans">
      {/* Top Announcement Bar */}
      <div className="bg-black text-[10px] md:text-xs py-2 px-6 lg:px-8 text-center hidden sm:block border-b border-white/5">
        <span className="text-white/80">Brothers Digital Media olarak başladığımız yolculuğumuzu, yeni kimliğimizle </span>
        <span className="text-white font-bold">Bromak Agency</span>
        <span className="text-white/80"> olarak sürdürüyoruz.</span>
      </div>

      <nav
        className={`w-full transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <Image
                src="/images/bromak-logo.png"
                alt="Bromak Agency"
                width={180}
                height={50}
                className="h-10 lg:h-12 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button className="rounded-full px-6" asChild>
                <a href="https://wa.me/905413660496" target="_blank" rel="noopener noreferrer">
                  Görüşme Talep Et
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border bg-background">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-base text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <Button className="rounded-full w-full mt-2" asChild>
                  <a href="https://wa.me/905413660496" target="_blank" rel="noopener noreferrer">
                    Görüşme Talep Et
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}
