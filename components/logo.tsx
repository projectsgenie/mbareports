"use client"

interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className = "h-10 w-auto", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon */}
      <div className="relative animate-float">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Glow Effect */}
          <circle cx="24" cy="24" r="20" fill="url(#glowGradient)" opacity="0.3" />

          {/* Books Stack */}
          <rect x="8" y="28" width="32" height="4" rx="2" fill="url(#bookGradient1)" />
          <rect x="10" y="24" width="28" height="4" rx="2" fill="url(#bookGradient2)" />
          <rect x="12" y="20" width="24" height="4" rx="2" fill="url(#bookGradient3)" />

          {/* Graduation Cap */}
          <path d="M24 12L8 18L24 24L40 18L24 12Z" fill="url(#capGradient)" stroke="url(#capStroke)" strokeWidth="1" />

          {/* Cap Top */}
          <ellipse cx="24" cy="18" rx="16" ry="3" fill="url(#capTopGradient)" />

          {/* Tassel */}
          <line x1="32" y1="15" x2="36" y2="12" stroke="url(#tasselGradient)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="36" cy="12" r="1.5" fill="#ff6b35" />
          <path d="M36 12L38 16L36 20L34 16Z" fill="url(#tasselEndGradient)" />

          {/* Magical Sparkles */}
          <g className="animate-pulse-slow">
            <circle cx="14" cy="14" r="1.5" fill="#8b5cf6" opacity="0.8" />
            <circle cx="38" cy="26" r="1.2" fill="#ff6b35" opacity="0.8" />
            <circle cx="6" cy="22" r="1" fill="#a855f7" opacity="0.6" />
            <circle cx="42" cy="32" r="0.8" fill="#c084fc" opacity="0.7" />
          </g>

          <defs>
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="bookGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff6b35" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="bookGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="bookGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff6b35" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="capGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1f2937" />
              <stop offset="100%" stopColor="#374151" />
            </linearGradient>
            <linearGradient id="capTopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#374151" />
              <stop offset="100%" stopColor="#1f2937" />
            </linearGradient>
            <linearGradient id="capStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="tasselGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b35" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="tasselEndGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b35" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span className="bg-gradient-primary bg-clip-text leading-tight tracking-wide font-professional font-bold text-3xl text-cyan-800">
            Projects Genie
          </span>
          <span className="text-xs bg-gradient-secondary bg-clip-text text-transparent font-normal leading-tight tracking-wider font-body">
            We Craft, You Score!!
          </span>
        </div>
      )}
    </div>
  )
}
