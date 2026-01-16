import { Target, Share2, Video, Camera, Megaphone, Globe, BarChart3, Palette, FileText } from "lucide-react"

const services = [
  {
    icon: Target,
    title: "Strateji & Planlama",
    description: "Çalışmalara başlamadan önce marka konumlandırması, hedef kitle analizi ve sektör incelemesi gerçekleştirilir. Bölgesel ve dijital rakipler analiz edilerek markayı ayrıştıracak iletişim dili ve proje bazlı pazarlama yaklaşımı belirlenir. İçerik ve reklam süreçleri, sabit yıllık planlar yerine aylık ve güncel dinamiklere uygun şekilde planlanır. Satış hedefleriyle uyumlu mesajlar, tüm içerik ve reklam metinlerinde tutarlı bir biçimde uygulanır.",
    items: [],
  },
  {
    icon: Share2,
    title: "Sosyal Medya Yönetimi",
    description: "Instagram ve Facebook hesapları senkron şekilde yönetilir, LinkedIn hesabı oluşturularak üretilen içerikler burada da paylaşılır. Aylık ortalama 8 adet post üretimi sağlanır; reels içerikler sektör yapısı, sağlanan veriler ve yapılan analizlere göre değişken olarak planlanır. Metin yazarlığı, içerik üretim sürecinin doğal bir parçası olarak satış ve kurumsal dile uygun şekilde gerçekleştirilir. Yorum ve mesaj yönetimi ajans hizmet kapsamına dahil değildir; ancak hazır yanıtlar ve kaydedilen mesajlar oluşturularak firmaya destek sağlanabilir.",
    items: [],
  },
  {
    icon: Video,
    title: "Drone & Video Çekimleri",
    description: "Projenin arsa, çevre ve konumunu anlatan drone çekimleri profesyonel ekipmanlarla gerçekleştirilmektedir. Video çekimleri: Malzeme, işçilik ve proje detayları video kurgusunun doğal parçaları olarak çekim sürecine dahil edilir. *Genel tanıtım filmleri ve kapsamlı video prodüksiyonları opsiyonel olarak değerlendirilir ve ihtiyaçlara göre planlanır.",
    items: [],
  },
  {
    icon: Camera,
    title: "Fotoğraf Çekimleri",
    description: "Şantiye süreci, malzeme detayları, daire içleri ve dış cephe alanları profesyonel fotoğraf çekimleriyle belgelenir. Geniş açı, gün ışığı ve akşam çekimleri proje ihtiyaçlarına göre planlanır. Üretilen görseller, sosyal medya, web sitesi ve tanıtım materyallerinde kullanılmak üzere yüksek kalite standartlarında hazırlanır. *Fotoğraf çekimleri, proje kapsamına göre ayrı kalemler halinde değerlendirilir.",
    items: [],
  },
  {
    icon: Megaphone,
    title: "Satış Reklam İçerikleri",
    description: "Satışa yönelik video ve görsel içerikler, genel olarak tanıtım filmi ve video prodüksiyon süreci kapsamında ele alınır. Satılık daire tanıtım videoları ve kısa reklam filmleri, ihtiyaç ve hedeflere göre opsiyonel olarak üretilir. Kampanya dönemlerine özel görseller, sosyal medya yönetimi kapsamında hazırlanır ve yayınlanır. Tüm içerikler, dijital reklam mecralarına uygun formatlarda üretilir.",
    items: [],
  },
  {
    icon: Globe,
    title: "İnternet Sitesi",
    description: "Kurumsal web sitesi ve proje tanıtım sayfaları modern, mobil uyumlu ve SEO altyapısına uygun şekilde hazırlanır. Daire planları ve görseller, firma tarafından sağlandığında siteye entegre edilir. Ziyaretçilerin kolayca iletişime geçebilmesi için bilgi talep ve randevu formları siteye dahil edilir. Web sitesi çalışmaları, kullanıcı deneyimi ve dönüşüm odaklı yapı esas alınarak planlanır.",
    items: [],
  },
  {
    icon: BarChart3,
    title: "Dijital Reklam Yönetimi",
    description: "Google Ads reklamlarının panel üzerinden kurulumu, takibi ve optimizasyonu ajansımız tarafından yapılmaktadır (opsiyonel). Instagram ve Facebook reklamları sosyal medya yönetimine talep edilmesi halinde dahil edilir. Reklam çalışmalarında hedef kitle, bölge ve davranışlara göre reklam hunisi (soğuk–ılık–sıcak) modeli uygulanır. Reklam kreatifleri, akılda kalıcı ancak marka değerini koruyan bir iletişim diliyle hazırlanır.",
    items: [],
  },
  {
    icon: Palette,
    title: "Grafik Tasarım",
    description: "Grafik tasarım, markalama ve kurumsal kimlik çalışmaları ihtiyaç doğrultusunda opsiyonel olarak sunulmaktadır. Logo revizyonu, kurumsal kimlik oluşturma ve basılı/dijital tasarımlar ayrı hizmet kalemleri halinde değerlendirilir. Tüm tasarım çalışmaları marka bütünlüğünü koruyacak şekilde hazırlanır ve farklı mecralara uyumlu olarak teslim edilir.",
    items: [],
  },
  {
    icon: FileText,
    title: "Raporlama & İletişim",
    description: "Yapılan çalışmalar aylık olarak performans değerlendirmeleriyle analiz edilir ve firma tarafına bilgilendirme sağlanır. Süreç boyunca firma yetkilileriyle düzenli iletişim kurularak beyin fırtınası ve stratejik değerlendirmeler yapılır. Ajans–firma iş birliği, karşılıklı geri bildirim ve yönlendirme esasına dayalı olarak ilerler.",
    items: [],
  },
]

export function ServicesSection() {
  return (
    <section id="hizmetler" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Hizmetlerimiz</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
            İçerik Üretim Süreçleri
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            PLT İnovasyon talepleri doğrultusunda oluşturulan hizmet yanıtı
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-primary-foreground transition-colors">
                <service.icon className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-6">{service.description}</p>

              {/* Items */}
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
