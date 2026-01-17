"use client"

import { ArrowRight, FileText, Download, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

export function HeroSection() {
  const [showPdfModal, setShowPdfModal] = useState(false)

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="flex flex-col items-center gap-4 mb-8 animate-fade-up">
            <div className="bg-neutral-800 rounded-2xl p-4">
              <Image
                src="/images/plt-logo.png"
                alt="PLT İnovasyon"
                width={80}
                height={80}
                className="h-16 md:h-20 w-auto"
              />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm">
              <span className="w-2 h-2 rounded-full bg-foreground" />
              PLT İnovasyon İçin Özel Teklif
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6 animate-fade-up animation-delay-100 text-balance">
            Markanızı Zirveye
            <br />
            Taşıyacak Ajans
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up animation-delay-200 text-pretty">
            Strateji, yaratıcılık ve teknolojiyi bir araya getirerek projenizi başarıya ulaştırıyoruz. Anahtar teslim
            çözümlerle yanınızdayız.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-3 animate-fade-up animation-delay-300">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-blue-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <Button
                size="lg"
                className="relative rounded-full px-10 h-14 text-lg bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 text-white border border-white/10 shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300"
                onClick={() => setShowPdfModal(true)}
              >
                <span className="relative z-10 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent font-semibold tracking-wide flex items-center gap-3">
                  İşlerimiz
                  <ArrowRight className="w-5 h-5 text-white/90 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
              </Button>
            </div>
          </div>

          {/* Stats */}

        </div>
      </section>

      {/* PDF Modal */}
      {showPdfModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setShowPdfModal(false)}
        >
          <div
            className="bg-background rounded-2xl max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-border flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Sunumlarımız</h3>
                  <p className="text-sm text-muted-foreground">İşlerimizi İnceleyin</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={() => setShowPdfModal(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <p className="text-sm text-foreground/80 leading-relaxed">
                  <span className="font-semibold text-blue-600">ℹ️ Bilgilendirme:</span> Sunum dosyalarımız yüksek kaliteli görseller içerdiği için boyutları büyüktür. Dosyanın yüklenmesi birkaç saniye sürebilir, lütfen bekleyiniz.
                </p>
              </div>

              <div className="space-y-3">
                {/* Bromak Sunum */}
                <div className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">Bromak Genel Sunum</h4>
                      <p className="text-xs text-muted-foreground mt-1">Ajans portföyü ve hizmetlerimiz</p>
                    </div>
                  </div>
                  <Button
                    className="w-full rounded-full h-10 gap-2"
                    asChild
                  >
                    <a href="/images/Bromak-Sunum.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4" />
                      Görüntüle
                    </a>
                  </Button>
                </div>

                {/* Kerem Nukte Sunum */}
                <div className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">Kerem Nukte Projesi</h4>
                      <p className="text-xs text-muted-foreground mt-1">Özel proje sunumu</p>
                    </div>
                  </div>
                  <Button
                    className="w-full rounded-full h-10 gap-2"
                    variant="outline"
                    asChild
                  >
                    <a href="/images/kerem-nukte.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4" />
                      Görüntüle
                    </a>
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  className="w-full rounded-full h-10 mt-2"
                  onClick={() => setShowPdfModal(false)}
                >
                  Kapat
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
