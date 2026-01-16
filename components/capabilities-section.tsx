import { Check } from "lucide-react"

const capabilities = {
  left: [
    "Marka Konumlandırması",
    "Hedef Kitle Analizi",
    "Rakip Analizi",
    "İçerik Stratejisi",
    "Sosyal Medya Yönetimi",
    "Topluluk Yönetimi",
    "Metin Yazarlığı",
    "SEO Optimizasyonu",
  ],
  right: [
    "Drone Çekimleri",
    "Profesyonel Fotoğrafçılık",
    "Video Prodüksiyon",
    "Google Ads Yönetimi",
    "Meta Reklamları",
    "Web Sitesi Tasarımı",
    "Grafik Tasarım",
    "Kurumsal Kimlik",
  ],
}

export function CapabilitiesSection() {
  return (
    <section id="yetenekler" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Yeteneklerimiz</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-6 text-balance">
              İhtiyacınız Olan Her Şey Tek Çatı Altında
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              PLT İnovasyon'un başarısı için gereken tüm pazarlama ve reklam hizmetlerini sunuyoruz.
            </p>
          </div>

          {/* Right Content - Capabilities Grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div className="space-y-4">
              {capabilities.left.map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors">
                  <span className="w-2 h-2 rounded-full bg-foreground" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {capabilities.right.map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors">
                  <span className="w-2 h-2 rounded-full bg-foreground" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
