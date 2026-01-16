"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const awards = [
  {
    year: "2025",
    items: [
      {
        competition: "TRT Geleceğin İletişimcileri",
        category: "Dijital Yayıncılık",
        subcategory: "Dijital İçerik Yönetimi",
        project: "Rastgel",
        rank: 3,
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        competition: "TRT Geleceğin İletişimcileri",
        category: "Dijital Yayıncılık",
        subcategory: "Dijital İçerik Yönetimi",
        project: "Ya Olmasaydı",
        rank: 1,
      },
      {
        competition: "TRT Geleceğin İletişimcileri",
        category: "Radyo Yayıncılığı",
        subcategory: "Radyo Programı",
        project: "Sessiz Tanık 2",
        rank: 2,
      },
      {
        competition: "Aydın Doğan 34. Genç İletişimciler",
        category: "İnternet Yayıncılığı",
        subcategory: "İnternet Sitesi",
        project: "Ya Olmasaydı",
        rank: 1,
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        competition: "TRT Geleceğin İletişimcileri",
        category: "Radyo Yayıncılığı",
        subcategory: "Radyo Belgeseli",
        project: "Sessiz Tanık",
        rank: 2,
      },
      {
        competition: "TRT Geleceğin İletişimcileri",
        category: "Radyo Yayıncılığı",
        subcategory: "Radyo Belgeseli",
        project: "Deli Bu Kadın",
        rank: 3,
      },
    ],
  },
]

// ... (helpers remain slightly same or similar, but I'm editing the whole block to be safe)

function getRankLabel(rank: number) {
  if (rank === 1) return "Birincilik"
  if (rank === 2) return "İkincilik"
  return "Üçüncülük"
}

function getRankGradient(rank: number) {
  if (rank === 1) return "from-amber-400 to-yellow-500"
  if (rank === 2) return "from-slate-300 to-slate-400"
  return "from-amber-600 to-amber-700"
}

export function AwardsSection() {
  return (
    <section id="oduller" className="py-32 px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header - Apple style large typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-semibold text-foreground tracking-tight mb-6">Ödüllerimiz</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Türkiye'nin en prestijli iletişim yarışmalarında elde ettiğimiz başarılar
          </p>
        </motion.div>

        {/* Stats - Minimal Apple style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-16 md:gap-24 mb-24"
        >
          <div className="text-center">
            <div className="text-6xl md:text-7xl font-semibold bg-gradient-to-b from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              2
            </div>
            <div className="text-sm text-muted-foreground mt-2 tracking-wide">Birincilik</div>
          </div>
          <div className="text-center">
            <div className="text-6xl md:text-7xl font-semibold bg-gradient-to-b from-slate-300 to-slate-400 bg-clip-text text-transparent">
              2
            </div>
            <div className="text-sm text-muted-foreground mt-2 tracking-wide">İkincilik</div>
          </div>
          <div className="text-center">
            <div className="text-6xl md:text-7xl font-semibold bg-gradient-to-b from-amber-600 to-amber-700 bg-clip-text text-transparent">
              2
            </div>
            <div className="text-sm text-muted-foreground mt-2 tracking-wide">Üçüncülük</div>
          </div>
        </motion.div>

        {/* Trophy showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-end gap-8 md:gap-16 mb-32"
        >
          <div className="text-center">
            <Image
              src="/images/aydin-dogan-trophy.png"
              alt="Aydın Doğan Genç İletişimciler Ödülü"
              width={180}
              height={240}
              className="h-40 md:h-52 w-auto object-contain drop-shadow-2xl"
            />
            <p className="text-xs text-muted-foreground mt-4 max-w-32">Aydın Doğan Genç İletişimciler</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/trt-trophy.png"
              alt="TRT Geleceğin İletişimcileri Ödülleri"
              width={320}
              height={320}
              className="h-56 md:h-72 w-auto object-contain drop-shadow-2xl"
            />
            <p className="text-xs text-muted-foreground mt-4">TRT Geleceğin İletişimcileri</p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:-translate-x-1/2" />

          {awards.map((yearGroup, yearIdx) => (
            <motion.div
              key={yearGroup.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: yearIdx * 0.1 }}
              className="relative mb-20 last:mb-0"
            >
              {/* Year badge */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 bg-foreground rounded-full flex items-center justify-center z-10">
                <span className="text-xs font-semibold text-background">{yearGroup.year.slice(-2)}</span>
              </div>

              {/* Year label for mobile */}
              <div className="ml-14 md:hidden mb-6">
                <span className="text-3xl font-semibold text-foreground">{yearGroup.year}</span>
              </div>

              {/* Awards grid */}
              <div className="ml-14 md:ml-0 md:grid md:grid-cols-2 md:gap-8">
                {yearGroup.items.map((award: any, idx) => {
                  const isLeft = idx % 2 === 0
                  return (
                    <div
                      key={idx}
                      className={`mb-6 md:mb-0 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:col-start-2"}`}
                    >
                      {/* Year label for desktop - only show once per year on first item */}
                      {idx === 0 && (
                        <div className="hidden md:block mb-4">
                          <span className="text-4xl font-semibold text-foreground">{yearGroup.year}</span>
                        </div>
                      )}

                      <div className={`inline-block ${isLeft ? "md:text-right" : "md:text-left"}`}>
                        {/* Rank badge */}
                        <div className={`inline-flex items-center gap-2 mb-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getRankGradient(award.rank)}`}
                          >
                            {getRankLabel(award.rank)}
                          </span>
                        </div>

                        {/* Project name */}
                        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">{award.project}</h3>

                        {/* Competition */}
                        <p className="text-sm font-medium text-foreground/80 mb-1">{award.competition}</p>

                        {/* Category */}
                        <p className="text-sm text-muted-foreground">
                          {award.category} · {award.subcategory}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verification Links */}
        <div className="mt-20 text-center border-t border-border pt-8 opacity-70 hover:opacity-100 transition-opacity">
          <p className="text-xs text-muted-foreground mb-4 uppercase tracking-widest">Ödül Arşivleri ve Teyit</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-foreground/60">
            <a href="https://www.trtgeleceginiletisimcileri.com/arsiv/2024" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1">
              TRT 2024 Arşivi <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://www.trtgeleceginiletisimcileri.com/arsiv/2023" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1">
              TRT 2023 Arşivi <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://genciletisimcileryarismasi.com/34-yarisma-sonuclari/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1">
              Aydın Doğan 34. Yarışma Arşivi <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
