import { Button } from "@/components/ui/button"
import { MessageCircle, FileText, Sparkles, Zap, Award, Star, TrendingUp } from "lucide-react"
import Link from "next/link"
import { FloatingBooks, AnimatedGraduationCap, FloatingParticles } from "@/components/animated-icons"

export function HeroSection() {
  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in getting a quote for my MBA/BBA project. Can you please provide more details about your services?",
  )
  const whatsappUrl = `https://wa.me/919876543210?text=${whatsappMessage}`

  return (
    <section className="relative py-12 md:py-20 lg:py-32 overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Layers */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-orange-500/10 animate-gradient" />

      {/* AI Magic Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 dark:opacity-90"
          style={{
            backgroundImage: "url('/images/ai-magic.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Floating Elements */}
      <FloatingBooks />
      <FloatingParticles />

      {/* Animated Orbs */}
      <div className="absolute inset-0 opacity-45 opacity-40 opacity-35 opacity-30 opacity-25 opacity-100 font-medium">
        <div className="absolute top-20 left-4 md:left-10 w-20 h-20 md:w-32 md:h-32 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-float" />
        <div
          className="absolute top-40 right-4 md:right-20 w-24 h-24 md:w-40 md:h-40 bg-gradient-secondary rounded-full blur-3xl opacity-15 animate-float-slow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 left-1/4 w-24 h-24 md:w-36 md:h-36 bg-purple-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-20 h-20 md:w-28 md:h-28 bg-orange-400/20 rounded-full blur-2xl animate-bounce-slow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container relative z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center space-y-8 md:space-y-12">
          {/* Animated Graduation Cap */}
          <div className="animate-fade-in-down">
            <AnimatedGraduationCap />
          </div>

          <div className="space-y-6 md:space-y-8">
            {/* Animated Badge */}
            <div className="animate-scale-in">
              <div className="inline-flex items-center space-x-2 bg-gradient-card border-2 border-purple-200 dark:border-purple-800 rounded-full px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm backdrop-blur-sm">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 md:h-4 md:w-4 text-yellow-400 fill-current animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
                <span className="text-gradient font-semibold">Trusted by 500+ Students</span>
                <TrendingUp className="h-3 w-3 md:h-4 md:w-4 text-green-500 animate-bounce" />
              </div>
            </div>

            {/* Main Heading with Staggered Animation */}
            <div className="space-y-2 md:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-tight">
                <div className="animate-slide-in-left">Get High-Quality</div>
                <div className="animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
                  <span className="text-gradient inline-block transform hover:scale-105 transition-transform duration-300">
                    MBA Projects
                  </span>{" "}
                  &
                </div>
                <div className="animate-slide-in-left" style={{ animationDelay: "0.6s" }}>
                  <span className="text-gradient inline-block transform hover:scale-105 transition-transform duration-300">
                    Assignments
                  </span>
                </div>
              </h1>
            </div>

            {/* Animated Subtitle */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
              <div className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed space-y-2 font-body">
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <span>🎓</span>
                  <span>Trusted by</span>
                  <span className="text-gradient font-bold animate-wiggle">IIT MBA Students</span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-xs sm:text-sm md:text-sm lg:text-base">
                  <span className="text-purple-600 dark:text-purple-400 font-bold animate-pulse flex items-center gap-1">
                    ✨ Plagiarism-Free
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="text-orange-600 dark:text-orange-400 font-bold animate-pulse flex items-center gap-1">
                    🚀 Custom-Written
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="text-green-600 dark:text-green-400 font-bold animate-pulse flex items-center gap-1">
                    ⚡ On-Time Delivery
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Animated CTA Buttons */}
          <div className="animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center max-w-2xl mx-auto">
              <Button
                size="lg"
                className="btn-gradient text-sm md:text-base px-6 md:px-10 py-6 md:py-8 group transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 w-full sm:w-auto"
                asChild
              >
                <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6 group-hover:animate-bounce" />
                  <span className="animate-pulse">📲 Get Quote on WhatsApp</span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-sm md:text-base px-6 md:px-10 py-6 md:py-8 border-2 md:border-3 border-purple-300 hover:border-purple-500 hover:bg-gradient-card group transform hover:scale-105 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
                asChild
              >
                <Link href="#samples">
                  <FileText className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6 group-hover:animate-pulse" />
                  <span>📄 View Samples</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Animated Stats Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: "1.5s" }}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-20 pt-8 md:pt-16 border-t-2 border-gradient-primary/20 max-w-4xl mx-auto">
              <div className="text-center space-y-3 md:space-y-4 group cursor-pointer">
                <div className="relative">
                  <div className="text-3xl md:text-4xl font-bold text-gradient group-hover:scale-125 transition-transform duration-500 animate-bounce-slow">
                    500+
                  </div>
                  <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 animate-spin-slow">
                    <Sparkles className="h-6 w-6 md:h-8 md:w-8 text-purple-400" />
                  </div>
                </div>
                <div className="text-muted-foreground flex items-center justify-center space-x-2 text-xs md:text-sm">
                  <Award className="h-4 w-4 md:h-5 md:w-5 text-purple-500 animate-pulse" />
                  <span className="font-semibold">Projects Completed</span>
                </div>
              </div>

              <div className="text-center space-y-3 md:space-y-4 group cursor-pointer">
                <div className="relative">
                  <div
                    className="text-3xl md:text-4xl font-bold text-gradient group-hover:scale-125 transition-transform duration-500 animate-bounce-slow"
                    style={{ animationDelay: "1s" }}
                  >
                    98%
                  </div>
                  <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 animate-bounce">
                    <Zap className="h-6 w-6 md:h-8 md:w-8 text-orange-400" />
                  </div>
                </div>
                <div className="text-muted-foreground flex items-center justify-center space-x-2 text-xs md:text-sm">
                  <Zap className="h-4 w-4 md:h-5 md:w-5 text-orange-500 animate-pulse" />
                  <span className="font-semibold">On-Time Delivery</span>
                </div>
              </div>

              <div className="text-center space-y-3 md:space-y-4 group cursor-pointer">
                <div className="relative">
                  <div
                    className="text-3xl md:text-4xl font-bold text-gradient group-hover:scale-125 transition-transform duration-500 animate-bounce-slow"
                    style={{ animationDelay: "2s" }}
                  >
                    100%
                  </div>
                  <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 animate-wiggle">
                    <Star className="h-6 w-6 md:h-8 md:w-8 text-yellow-400 fill-current" />
                  </div>
                </div>
                <div className="text-muted-foreground flex items-center justify-center space-x-2 text-xs md:text-sm">
                  <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-purple-500 animate-pulse" />
                  <span className="font-semibold">Plagiarism-Free</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Action Indicator */}
          <div className="animate-bounce mt-8 md:mt-16">
            <div className="mx-auto w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
