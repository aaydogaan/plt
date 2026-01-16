"use client"

import { ArrowRight, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "01",
    title: "Keşif & Ön Görüşme",
    description:
      "Çalışmaya başlamadan önce firma yetkilileriyle bir ön görüşme planlıyoruz. Bu görüşmede markanın beklentilerini, hedeflerini, sektördeki konumunu ve rakiplerden beğenilen örnek çalışmaları detaylı şekilde dinliyoruz. Amaç, markaya özel doğru bir yol haritası oluşturmak.",
  },
  {
    number: "02",
    title: "Hizmetlerin Aktarılması",
    description:
      "Ön görüşme sonrasında sosyal medya yönetimi, web sitesi, SEO ve reklam yönetimi başta olmak üzere sunduğumuz tüm hizmetleri detaylı olarak anlatıyoruz. Benzer sektörlerde yürüttüğümüz süreçleri ve markalara sağladığımız katkıları paylaşarak, nasıl bir değer üretebileceğimizi netleştiriyoruz.",
  },
  {
    number: "03",
    title: "Tekliflendirme Süreci",
    description:
      "Görüşmede konuşulan ihtiyaçlar doğrultusunda firmaya özel bir teklif formu hazırlanır. Bu formda yapılacak çalışmalar, hizmet kapsamları ve detaylar açık şekilde belirtilir. Teklif, tamamen firmanın taleplerine göre şekillendirilir.",
  },
  {
    number: "04",
    title: "Sözleşme & Planlama",
    description:
      "Kararlaştırılan hizmetler doğrultusunda, görüşmede konuşulan tüm detayları kapsayan bir sözleşme hazırlanır. Sözleşmenin imzalanmasının ardından, çalışmalar planlanan takvim doğrultusunda başlatılır ve süreç netleştirilir.",
  },
  {
    number: "05",
    title: "İlk Sunum & Yayın Süreci",
    description:
      "Çalışmaların başlangıcında, genellikle 8 posttan oluşan ilk içerik sunumu hazırlanır ve firma ile birlikte değerlendirilir. Yapılan revizeler sonrası sosyal medya paylaşımlarına başlanır. Süreç içerisinde talep edilen ek hizmetler ve gelişen ihtiyaçlar doğrultusunda çalışmalar şekillendirilerek devam eder.",
  },
]

export function ProcessSection() {
  const [selectedStep, setSelectedStep] = useState<typeof steps[0] | null>(null)

  return (
    <>
      <section id="süreç" className="py-24 lg:py-32 px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Çalışma Sürecimiz</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
              Nasıl Çalışıyoruz?
            </h2>
          </div>

          {/* Process Steps */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <button
                key={step.number}
                onClick={() => setSelectedStep(step)}
                className="group relative flex flex-col md:flex-row gap-6 md:gap-12 p-6 lg:p-8 border-b border-border last:border-0 hover:bg-background/50 transition-colors w-full text-left cursor-pointer"
              >
                {/* Number */}
                <div className="flex-shrink-0">
                  <span className="text-5xl md:text-6xl font-semibold text-foreground/10 group-hover:text-foreground/20 transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground max-w-2xl line-clamp-2">{step.description}</p>
                </div>

                {/* Arrow */}
                <div className="hidden lg:flex items-center">
                  <ArrowRight className="w-6 h-6 text-muted-foreground/30 group-hover:text-foreground group-hover:translate-x-2 transition-all" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedStep && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedStep(null)}
        >
          <div
            className="bg-background rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-background border-b border-border p-6 flex items-start justify-between">
              <div>
                <span className="text-4xl font-semibold text-foreground/20">{selectedStep.number}</span>
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mt-2">{selectedStep.title}</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={() => setSelectedStep(null)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <p className="text-muted-foreground text-base leading-relaxed">
                {selectedStep.description}
              </p>
            </div>

            {/* Footer */}
            <div className="border-t border-border p-6 bg-muted/30">
              <Button
                className="w-full rounded-full"
                onClick={() => setSelectedStep(null)}
              >
                Kapat
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
