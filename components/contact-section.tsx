"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { getSupabaseClient } from "@/lib/supabase"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const supabase = getSupabaseClient()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    }

    try {
      const { error } = await supabase.from("leads").insert([data])

      if (error) throw error

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      })

      // Reset form
      event.currentTarget.reset()
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-12 md:py-20 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to get started? Contact us for a free consultation and quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Send us a message</CardTitle>
              <CardDescription className="text-sm md:text-base">
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm md:text-base">
                      Name *
                    </Label>
                    <Input id="name" name="name" required className="text-sm md:text-base" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm md:text-base">
                      Email *
                    </Label>
                    <Input id="email" name="email" type="email" required className="text-sm md:text-base" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm md:text-base">
                    Phone
                  </Label>
                  <Input id="phone" name="phone" type="tel" className="text-sm md:text-base" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm md:text-base">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project requirements..."
                    required
                    className="text-sm md:text-base"
                  />
                </div>
                <Button type="submit" className="w-full text-sm md:text-base py-2 md:py-3" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                  <span className="text-sm md:text-base">projectsgeniein@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                  <span className="text-sm md:text-base">+91 8800237555</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                  <span className="text-sm md:text-base">Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Why Choose Us?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-primary flex-shrink-0">✓</span>
                  <span className="text-sm md:text-base">100% Plagiarism-free content</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary flex-shrink-0">✓</span>
                  <span className="text-sm md:text-base">On-time delivery guaranteed</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary flex-shrink-0">✓</span>
                  <span className="text-sm md:text-base">University guidelines compliance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary flex-shrink-0">✓</span>
                  <span className="text-sm md:text-base">24/7 customer support</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary flex-shrink-0">✓</span>
                  <span className="text-sm md:text-base">Unlimited revisions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
