"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { getSupabaseClient } from "@/lib/supabase"
import { GraduationCap } from "lucide-react"

export default function AdminLogin() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const { toast } = useToast()
  const router = useRouter()
  const supabase = getSupabaseClient()

  // Check if user is already logged in
  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (user) {
        router.push("/admin")
      }
    }
    checkUser()
  }, [router, supabase.auth])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    try {
      if (isSignUp) {
        // Sign up new user
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: "Admin User",
            },
          },
        })

        if (error) throw error

        toast({
          title: "Account created successfully",
          description: "You can now sign in with your credentials",
        })

        // Switch to sign in mode
        setIsSignUp(false)
      } else {
        // Sign in existing user
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (error) throw error

        // The trigger function should handle profile creation
        // But let's ensure the profile exists with admin role
        if (data.user) {
          // Wait a moment for the trigger to execute
          await new Promise((resolve) => setTimeout(resolve, 1000))

          // Check if profile exists, if not create it
          const { data: existingProfile } = await supabase.from("profiles").select("*").eq("id", data.user.id).single()

          if (!existingProfile) {
            // Create profile if it doesn't exist
            const { error: profileError } = await supabase.from("profiles").insert({
              id: data.user.id,
              email: data.user.email,
              full_name: data.user.user_metadata?.full_name || "Admin User",
              role: "admin",
            })

            if (profileError) {
              console.error("Profile creation error:", profileError)
            }
          } else if (existingProfile.role !== "admin") {
            // Update role to admin if not already
            await supabase.from("profiles").update({ role: "admin" }).eq("id", data.user.id)
          }
        }

        toast({
          title: "Login successful",
          description: "Welcome to the admin dashboard",
        })

        router.push("/admin")
      }
    } catch (error: any) {
      toast({
        title: isSignUp ? "Sign up failed" : "Login failed",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <GraduationCap className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl">{isSignUp ? "Create Admin Account" : "Admin Login"}</CardTitle>
          <CardDescription>
            {isSignUp
              ? "Create your admin account for Projects Genie"
              : "Sign in to access the Projects Genie admin dashboard"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="admin@projectsgenie.com"
                defaultValue="admin@projectsgenie.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" placeholder="Enter your password" required />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (isSignUp ? "Creating account..." : "Signing in...") : isSignUp ? "Sign Up" : "Sign In"}
            </Button>
          </form>

          <div className="text-center">
            <Button variant="link" onClick={() => setIsSignUp(!isSignUp)} className="text-sm text-muted-foreground">
              {isSignUp ? "Already have an account? Sign in" : "Need to create an account? Sign up"}
            </Button>
          </div>

          <div className="text-center text-xs text-muted-foreground">
            <p>Use email: admin@projectsgenie.com</p>
            <p>Create any password for first-time setup</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
