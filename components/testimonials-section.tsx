import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { createServerClient } from "@/lib/supabase-server"

interface Testimonial {
  id: string
  student_name: string
  college_name: string
  feedback: string
  rating: number
}

export async function TestimonialsSection() {
  const supabase = await createServerClient()

  const { data: testimonials } = await supabase.from("testimonials").select("*").limit(6)

  return (
    <section id="testimonials" className="py-12 md:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">What Our Students Say</h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by students from top Indian universities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {testimonials?.map((testimonial: Testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-4 md:p-6 space-y-4 h-full flex flex-col">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground italic text-sm md:text-base flex-grow">"{testimonial.feedback}"</p>
                <div className="flex items-center space-x-3 mt-auto">
                  <Avatar className="h-8 w-8 md:h-10 md:w-10">
                    <AvatarFallback className="text-xs md:text-sm">
                      {testimonial.student_name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm md:text-base">{testimonial.student_name}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{testimonial.college_name}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
