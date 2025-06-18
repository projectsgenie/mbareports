"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/logo"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    { href: "#samples", label: "Samples" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center justify-center mb-8">
                    <Logo className="h-12" />
                  </div>
                  {navigationItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-muted"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-4 border-t">
                    <Button asChild className="w-full btn-gradient">
                      <Link href="#contact" onClick={() => setIsOpen(false)}>
                        Get Quote
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Navigation - Left Side */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#samples" className="text-sm font-medium hover:text-primary transition-colors text-orange-300">
              Samples
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors text-orange-300">
              Reviews
            </Link>
          </nav>

          {/* Centered Logo */}
          <div className="flex-1 flex justify-center md:flex-none">
            <Link href="/" className="flex items-center">
              <Logo className="h-10 md:h-12" />
            </Link>
          </div>

          {/* Desktop Navigation - Right Side */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors text-orange-300">
              Contact
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors text-orange-300">
              Blog
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button asChild className="hidden sm:inline-flex btn-gradient">
              <Link href="#contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
