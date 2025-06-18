"use client"

export function FloatingBooks() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Book 1 */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="8" y="15" width="24" height="3" rx="1" fill="url(#bookGrad1)" />
          <rect x="8" y="19" width="24" height="3" rx="1" fill="url(#bookGrad2)" />
          <rect x="8" y="23" width="24" height="3" rx="1" fill="url(#bookGrad3)" />
          <defs>
            <linearGradient id="bookGrad1">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="bookGrad2">
              <stop offset="0%" stopColor="#ff6b35" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="bookGrad3">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Book 2 */}
      <div className="absolute top-40 right-20 animate-float opacity-15" style={{ animationDelay: "2s" }}>
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
          <rect x="6" y="12" width="23" height="3" rx="1" fill="url(#bookGrad4)" />
          <rect x="6" y="16" width="23" height="3" rx="1" fill="url(#bookGrad5)" />
          <defs>
            <linearGradient id="bookGrad4">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
            <linearGradient id="bookGrad5">
              <stop offset="0%" stopColor="#ff6b35" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Book 3 */}
      <div className="absolute bottom-32 left-1/4 animate-float opacity-10" style={{ animationDelay: "4s" }}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <rect x="5" y="10" width="20" height="2.5" rx="1" fill="url(#bookGrad6)" />
          <rect x="5" y="13" width="20" height="2.5" rx="1" fill="url(#bookGrad7)" />
          <rect x="5" y="16" width="20" height="2.5" rx="1" fill="url(#bookGrad8)" />
          <defs>
            <linearGradient id="bookGrad6">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="bookGrad7">
              <stop offset="0%" stopColor="#ff6b35" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="bookGrad8">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export function AnimatedGraduationCap() {
  return (
    <div className="relative w-24 h-24 mx-auto mb-24">
      <div className="absolute inset-0 animate-spin-slow">
        <svg className="font-sans tracking-wide tracking-normal text-slate-500 bg-slate-300" width="96" height="96" viewBox="0 0 96 96" fill="none">
          {/* Glow Ring */}
          <circle cx="48" cy="48" r="40" stroke="url(#glowRing)" strokeWidth="2" fill="none" opacity="0.5" />

          {/* Main Cap */}
          <path d="M48 24L16 36L48 48L80 36L48 24Z" fill="url(#capMainGrad)" />
          <ellipse className="text-orange-400 font-sans bg-orange-500" cx="48" cy="36" rx="32" ry="6" fill="url(#capTopGrad)" />

          {/* Animated Tassel */}
          <g className="animate-bounce">
            <line x1="64" y1="30" x2="72" y2="24" stroke="url(#tasselGrad)" strokeWidth="3" strokeLinecap="round" />
            <circle cx="72" cy="24" r="2" fill="#ff6b35" />
            <path d="M72 24L76 32L72 40L68 32Z" fill="url(#tasselEndGrad)" />
          </g>

          <defs>
            <linearGradient id="glowRing">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
            <linearGradient id="capMainGrad">
              <stop offset="0%" stopColor="#1f2937" />
              <stop offset="100%" stopColor="#374151" />
            </linearGradient>
            <linearGradient id="capTopGrad">
              <stop offset="0%" stopColor="#374151" />
              <stop offset="100%" stopColor="#1f2937" />
            </linearGradient>
            <linearGradient id="tasselGrad">
              <stop offset="0%" stopColor="#ff6b35" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="tasselEndGrad">
              <stop offset="0%" stopColor="#ff6b35" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Animated Projects Genie Text */}
      <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-max text-center">
        <div className="animate-fade-in-up" style={{ animationDelay: "1s" }}>
          <h3 className="text-xl md:text-2xl font-professional bg-gradient-primary bg-clip-text animate-pulse whitespace-nowrap text-sky-950">
            Projects Genie
          </h3>
          <p
            className="text-xs md:text-sm mt-1 animate-fade-in-up whitespace-nowrap text-orange-500"
            style={{ animationDelay: "1.5s" }}
          >
            We Craft, You Score!!
          </p>
        </div>
      </div>
    </div>
  )
}

export function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
          }}
        >
          <div
            className={`w-2 h-2 rounded-full ${
              i % 3 === 0 ? "bg-purple-400" : i % 3 === 1 ? "bg-orange-400" : "bg-pink-400"
            } animate-pulse`}
          />
        </div>
      ))}
    </div>
  )
}

export function TypewriterText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="animate-typewriter whitespace-nowrap border-r-2 border-purple-500">{text}</div>
    </div>
  )
}
