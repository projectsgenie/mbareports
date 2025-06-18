import Link from "next/link"
import { Linkedin, Instagram, MessageCircle } from "lucide-react"
import { Logo } from "@/components/logo"

export function Footer() {
  const whatsappUrl = "https://wa.me/919876543210"

  return (
    <footer className="bg-background border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Logo className="h-10" />
            </Link>
            <p className="text-muted-foreground">
              Your Academic Project Partner - Delivering high-quality, plagiarism-free MBA, BBA, and PGDM project
              reports.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href={whatsappUrl} target="_blank" className="text-muted-foreground hover:text-primary">
                <MessageCircle className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary">
                  MBA Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  BBA Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  PGDM Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Assignments
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#samples" className="hover:text-primary">
                  Sample Reports
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Writing Guidelines
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: info@projectsgenie.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Location: Mumbai, Maharashtra</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Projects Genie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
