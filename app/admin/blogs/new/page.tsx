import { redirect } from "next/navigation"
import { createServerClient } from "@/lib/supabase-server"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { BlogPostForm } from "../_components/blog-post-form"

export default async function NewBlogPost() {
  const supabase = await createServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/admin/login")
  }

  // Check if user is admin
  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single()

  if (!profile || profile.role !== "admin") {
    redirect("/admin/login")
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link href="/admin/blogs" className="text-muted-foreground hover:text-primary flex items-center mb-2">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Blog Management
            </Link>
            <h1 className="text-3xl font-bold text-gradient">Create New Blog Post</h1>
            <p className="text-muted-foreground">Create a new blog post for your website</p>
          </div>
        </div>

        <Card className="card-gradient border-2 border-purple-300">
          <CardHeader>
            <CardTitle>Blog Post Details</CardTitle>
          </CardHeader>
          <CardContent>
            <BlogPostForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
