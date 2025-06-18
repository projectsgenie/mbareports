import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, MessageCircle, CreditCard, Rocket, Eye, Download, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    step: 1,
    title: "Confirm Guidelines and Choose Your Topic",
    description:
      "Start by sharing the University guidelines and topic (if already chosen if not mention your specialization). We'll ensure your report matches exactly what your University requirements.",
    icon: FileText,
    color: "bg-purple-500",
    delay: "0s",
  },
  {
    step: 2,
    title: "Receive a Quotation on WhatsApp",
    description: "No hidden charges, no surprises—just a clear, detailed quotation sent directly to your WhatsApp.",
    icon: MessageCircle,
    color: "bg-orange-500",
    delay: "0.2s",
  },
  {
    step: 3,
    title: "Make an Advance Payment",
    description: "Pay just 50% of the fees to kickstart your project. Simple, secure, and hassle-free.",
    icon: CreditCard,
    color: "bg-green-500",
    delay: "0.4s",
  },
  {
    step: 4,
    title: "Work Begins Right Away",
    description:
      "Once we confirm your payment, our team jumps straight into action, ensuring your report is ready by the promised deadline.",
    icon: Rocket,
    color: "bg-blue-500",
    delay: "0.6s",
  },
  {
    step: 5,
    title: "Get Project Completion Update",
    description:
      "As soon as your project is ready, we'll send you a sneak peek with screenshots of the work. This confirms you that your project report is completed and ready for delivery.",
    icon: Eye,
    color: "bg-pink-500",
    delay: "0.8s",
  },
  {
    step: 6,
    title: "Final Payment & Download",
    description:
      "Complete the remaining 50% payment and instantly download your high-quality, plagiarism-free project report.",
    icon: Download,
    color: "bg-indigo-500",
    delay: "1s",
  },
  {
    step: 7,
    title: "Unlimited Support & Revisions",
    description: "Get unlimited revisions and 24/7 support until you're 100% satisfied with your project report.",
    icon: CheckCircle,
    color: "bg-emerald-500",
    delay: "1.2s",
  },
]

export function HowItWorksSection() {
  const whatsappMessage = encodeURIComponent(
    "Hi! I want to get started with my project. Can you please guide me through the process?",
  )
  const whatsappUrl = `https://wa.me/919876543210?text=${whatsappMessage}`

  return (
    <section className="py-12 md:py-20 bg-gradient-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 md:left-10 w-20 h-20 md:w-32 md:h-32 bg-purple-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-4 md:right-10 w-24 h-24 md:w-40 md:h-40 bg-orange-500/10 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="container relative px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-primary/10 border border-purple-200 dark:border-purple-800 rounded-full px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm">
            <Clock className="h-3 w-3 md:h-4 md:w-4 text-purple-500" />
            <span className="text-gradient font-semibold">Simple & Fast Process</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Get your <span className="text-gradient">Customized</span>
            <br />
            Project Report in <span className="text-gradient">7 Simple Steps</span>
          </h2>

          <p className="text-base md:text-xl text-muted-foreground max-w-4xl mx-auto">
            Getting your Project Report done has never been easier! Here's how we make it a
            <span className="text-gradient font-semibold"> seamless experience</span> for you:
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {steps.map((stepItem, index) => {
            const Icon = stepItem.icon
            return (
              <Card
                key={stepItem.step}
                className="group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border-2 hover:border-purple-300 card-gradient relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: stepItem.delay }}
              >
                {/* Step Number Badge */}

                <CardHeader className="text-center pb-4 relative">
                  <Badge
                    className={`absolute top-0 left-0 ${stepItem.color} text-white text-sm md:text-base px-3 py-1 rounded-full shadow-lg font-bold`}
                  >
                    {stepItem.step}
                  </Badge>
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 ${stepItem.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <CardTitle className="text-base md:text-lg group-hover:text-gradient transition-colors">
                    {stepItem.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-center leading-relaxed text-sm md:text-base">
                    {stepItem.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12 max-w-2xl mx-auto">
          <div className="text-center space-y-3 p-4 md:p-6 rounded-lg bg-gradient-card border border-purple-200 dark:border-purple-800">
            <Clock className="h-6 w-6 md:h-8 md:w-8 text-blue-500 mx-auto" />
            <h3 className="font-semibold text-gradient text-sm md:text-base">On-Time Delivery</h3>
            <p className="text-xs md:text-sm text-muted-foreground">We guarantee delivery before your deadline</p>
          </div>

          <div className="text-center space-y-3 p-4 md:p-6 rounded-lg bg-gradient-card border border-purple-200 dark:border-purple-800">
            <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-purple-500 mx-auto" />
            <h3 className="font-semibold text-gradient text-sm md:text-base">Quality Assured</h3>
            <p className="text-xs md:text-sm text-muted-foreground">Plagiarism-free, university-compliant reports</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-4 md:space-y-6 bg-gradient-primary/10 rounded-2xl p-6 md:p-8 border border-purple-200 dark:border-purple-800">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">Ready to Get Started? 🚀</h3>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of satisfied students who have achieved academic excellence with our expert project writing
            services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <Button
              size="lg"
              className="btn-gradient text-sm md:text-lg px-6 md:px-8 py-4 md:py-6 group transform hover:scale-105 transition-all duration-300 shadow-xl w-full sm:w-auto"
              asChild
            >
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:animate-bounce" />
                Start Your Project Now
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-sm md:text-lg px-6 md:px-8 py-4 md:py-6 border-2 border-purple-300 hover:border-purple-500 hover:bg-gradient-card w-full sm:w-auto"
              asChild
            >
              <Link href="#contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
