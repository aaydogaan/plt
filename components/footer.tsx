import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-8 bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center">
            <Image src="/images/bromak-logo.png" alt="Bromak Agency" width={160} height={45} className="h-10 w-auto" />
          </a>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <a href="#hizmetler" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Hizmetler
            </a>
            <a href="#oduller" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Ödüller
            </a>
            <a href="#süreç" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Süreç
            </a>
            <a href="#yetenekler" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Yetenekler
            </a>
            <a href="#iletisim" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              İletişim
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">© 2025 Bromak Agency. Tüm hakları saklıdır.</p>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-8 border-t border-border pt-12">

          {/* Collab Badge */}
          <div className="flex items-center gap-6 p-4 rounded-3xl bg-background/50 backdrop-blur-sm border border-border hover:border-border/80 transition-colors">
            {/* Bromak Logo */}
            <div className="bg-white rounded-xl p-2 h-14 w-32 flex items-center justify-center">
              <Image
                src="/images/bromak-logo.png"
                alt="Bromak"
                width={120}
                height={40}
                className="w-full h-full object-contain brightness-0"
              />
            </div>

            {/* X Separator */}
            <span className="text-muted-foreground font-light text-xl">X</span>

            {/* Client Logo */}
            <div className="bg-neutral-900 rounded-xl p-2 h-14 w-32 flex items-center justify-center">
              <Image
                src="/images/plt-logo.png"
                alt="PLT İnovasyon"
                width={60}
                height={60}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <p className="text-xs text-muted-foreground font-medium tracking-wide">
            Bu teklif <span className="text-foreground">PLT İnovasyon</span> için özel olarak hazırlanmıştır.
          </p>
        </div>
      </div>
    </footer>
  )
}
