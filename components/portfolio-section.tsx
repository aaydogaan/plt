"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Instagram, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// Client Data
const clients = [
    {
        id: "parlak",
        name: "Parlak Mobilya",
        logo: "/images/parlak.png",
        instagram: "https://www.instagram.com/parlakmobilyadekorasyon",
        videos: [
            "https://videos.brodigitalmedia.com/parlak-1.mp4",
            "https://videos.brodigitalmedia.com/parlak-2.mp4",
            "https://videos.brodigitalmedia.com/parlak-3.mp4",
        ],
    },
    {
        id: "terra",
        name: "Terra Invest",
        logo: "/images/terrainvest-logo.png",
        instagram: "https://www.instagram.com/terrainvest",
        videos: [
            "https://videos.brodigitalmedia.com/terra-1.mp4",
            "https://videos.brodigitalmedia.com/terra-2.mp4",
            "https://videos.brodigitalmedia.com/terra-3.mp4",
        ],
    },
    {
        id: "essen",
        name: "Essen Hidrolik",
        logo: "/images/essen-bro.png",
        instagram: "https://www.instagram.com/essenhidrolik",
        videos: [
            "https://videos.brodigitalmedia.com/essen-1.mp4",
            "https://videos.brodigitalmedia.com/essen-2.mp4",
            "https://videos.brodigitalmedia.com/essen-3.mp4",
            "https://videos.brodigitalmedia.com/essen-4.mp4",
        ],
    },
]

// Custom Video Component for Premium Feel
function PremiumVideo({ src }: { src: string }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <div
            className="group relative aspect-[9/16] max-w-[280px] mx-auto rounded-2xl overflow-hidden bg-black border border-border shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-300"
            onClick={togglePlay}
        >
            <video
                ref={videoRef}
                src={src}
                playsInline
                loop
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                controlsList="nodownload nofullscreen noremoteplayback"
                disablePictureInPicture
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />

            {/* Play/Pause Overlay */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isPlaying ? "opacity-0 group-hover:opacity-100 bg-black/10" : "bg-black/30"}`}>
                <div className={`w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transition-transform duration-300 shadow-lg ${isPlaying ? "scale-90" : "scale-100 group-hover:scale-110"}`}>
                    {isPlaying ? (
                        <Pause className="w-5 h-5 text-white fill-white" />
                    ) : (
                        <Play className="w-5 h-5 text-white fill-white ml-1" />
                    )}
                </div>
            </div>
        </div>
    )
}

export function PortfolioSection() {
    const [activeTab, setActiveTab] = useState(clients[0].id)
    const activeClient = clients.find((c) => c.id === activeTab)

    return (
        <section id="islerimiz" className="py-24 lg:py-32 relative overflow-hidden bg-background">

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
                        Bizimle Büyüyenler
                    </h2>

                </div>

                {/* Logo Tabs */}
                <div className="flex flex-wrap justify-center gap-8 mb-16">
                    {clients.map((client) => (
                        <button
                            key={client.id}
                            onClick={() => setActiveTab(client.id)}
                            className="group relative"
                            aria-label={client.name}
                        >
                            <div
                                className={`flex items-center justify-center p-4 rounded-2xl border transition-all duration-300 ${activeTab === client.id
                                    ? "bg-white border-border shadow-md scale-110 ring-2 ring-primary/5"
                                    : "bg-transparent border-transparent hover:bg-muted/50 grayscale opacity-60 hover:grayscale-0 hover:opacity-100"
                                    }`}
                            >
                                <div className="relative w-16 h-16 md:w-24 md:h-24">
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeClient?.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-wrap justify-center gap-8"
                        >
                            {activeClient?.videos.map((videoPath, index) => (
                                <PremiumVideo key={`${activeClient.id}-${index}`} src={videoPath} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Minimal Footer */}
                <div className="mt-16 flex justify-center">
                    <Button
                        variant="outline"
                        className="group rounded-full gap-2 border-border hover:bg-muted"
                        asChild
                    >
                        <a href="https://instagram.com/bromakagency" target="_blank" rel="noreferrer">
                            <Instagram className="w-4 h-4" />
                            <span className="text-sm font-medium">@bromakagency</span>
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
