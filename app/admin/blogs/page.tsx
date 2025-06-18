import { redirect } from "next/navigation"
import { createServerClient } from "@/lib/supabase-server"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, ArrowLeft, Eye, Pencil, Trash2, CheckCircle, XCircle } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { Badge } from "@/components/ui/badge"

export default async function BlogsManagement() {
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

  // Fetch all blog posts
  const { data: blogs } = await supabase.from("blogs").select("*").order("created_at", { ascending: false })

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link href="/admin" className="text-muted-foreground hover:text-primary flex items-center mb-2">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold text-gradient">Blog Management</h1>
            <p className="text-muted-foreground">Create, edit, and manage your blog posts</p>
          </div>
          <Button asChild className="btn-gradient">
            <Link href="/admin/blogs/new">
              <Plus className="h-4 w-4 mr-2" />
              New Blog Post
            </Link>
          </Button>
        </div>

        {blogs && blogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {blogs.map((blog) => (
              <Card key={blog.id} className="card-gradient border-2 hover:border-purple-300 transition-colors">
                <CardHeader className="flex flex-row items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant={blog.published ? "default" : "outline"} className="bg-gradient-primary">
                        {blog.published ? (
                          <CheckCircle className="h-3 w-3 mr-1" />
                        ) : (
                          <XCircle className="h-3 w-3 mr-1" />
                        )}
                        {blog.published ? "Published" : "Draft"}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {formatDistanceToNow(new Date(blog.created_at), { addSuffix: true })}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-gradient transition-colors">{blog.title}</CardTitle>
                    <CardDescription className="line-clamp-2 mt-2">{blog.excerpt}</CardDescription>
                  </div>
                  {blog.featured_image && (
                    <div className="w-24 h-24 rounded-md overflow-hidden">
                      <img
                        src={blog.featured_image || "/placeholder.svg"}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/blog/${blog.slug}`} target="_blank">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/admin/blogs/${blog.id}`}>
                        <Pencil className="h-4 w-4 mr-1" />
                        Edit
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-500 hover:text-red-700">
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center p-12">
            <CardContent>
              <p className="text-muted-foreground mb-4">No blog posts found. Create your first blog post!</p>
              <Button asChild className="btn-gradient">
                <Link href="/admin/blogs/new">
                  <Plus className="h-4 w-4 mr-2" />
                  New Blog Post
                </Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
