"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="iletisim" className="py-24 lg:py-32 px-6 lg:px-8 bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <Image
                src="/images/bromak-logo.png"
                alt="Bromak Agency"
                width={160}
                height={48}
                className="h-10 md:h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider mb-4">İletişim</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-balance">
              Projenizi Birlikte Değerlendirelim
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10">
              PLT İnovasyon için hazırladığımız özel teklifimizi detaylı görüşmek ve sorularınızı yanıtlamak için
              bizimle iletişime geçin.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Telefon</p>
                  <p className="font-medium">0541 366 04 96</p>
                  <p className="font-medium">0505 063 85 43</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">E-posta</p>
                  <p className="font-medium">bromakagency@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Adres</p>
                  <p className="font-medium">Esenler Mah. Horasan Sok.</p>
                  <p className="font-medium">Görgülü Plaza A Blok: 4/4</p>
                  <p className="font-medium">Selçuklu/KONYA</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-primary-foreground/10">
              <p className="text-sm text-primary-foreground/60 mb-4">Sosyal Medya</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/bromakagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-primary-foreground/10 text-sm font-medium hover:bg-primary-foreground/20 transition-colors"
                >
                  @bromakagency
                </a>
                <a
                  href="https://x.com/Bromakagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-primary-foreground/10 text-sm font-medium hover:bg-primary-foreground/20 transition-colors"
                >
                  X / Twitter
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-primary-foreground/10 h-fit">
            <h3 className="text-xl font-semibold mb-6">Görüşme Talep Formu</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  placeholder="Adınız Soyadınız"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 h-12"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="E-posta Adresiniz"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 h-12"
                />
                <Input
                  type="tel"
                  placeholder="Telefon Numaranız"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 h-12"
                />
              </div>
              <Textarea
                placeholder="Mesajınız..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 resize-none"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full h-12 bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
              >
                <Send className="w-4 h-4 mr-2" />
                Mesaj Gönder
              </Button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 relative w-full h-[450px] rounded-2xl overflow-hidden border border-primary-foreground/10 group">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d787.1795609484748!2d32.46371767589889!3d37.89027139372808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d085da06dcc083%3A0x57c6d8d93e0530a1!2sBromak%20Agency%20-%20Konya%20Reklam%20Ajans%C4%B1!5e0!3m2!1str!2str!4v1768571723259!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
          />

          {/* Directions Button */}
          <div className="absolute bottom-6 right-6 z-10">
            <Button
              asChild
              className="bg-white text-black hover:bg-white/90 shadow-lg rounded-full px-6 h-14 gap-3 font-semibold"
            >
              <a
                href="https://maps.app.goo.gl/esGcV29wWX7f7q6X7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <div className="-mt-2 relative">
                  <Image
                    src="/images/bromak-maker.png"
                    alt="Bromak Location"
                    width={40}
                    height={50}
                    className="w-8 h-auto animate-bounce"
                  />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/20 blur-[2px] rounded-[100%] animate-pulse" />
                </div>
                <span>Yol Tarifi Al</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
