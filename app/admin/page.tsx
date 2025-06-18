import { redirect } from "next/navigation"
import { createServerClient } from "@/lib/supabase-server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, MessageSquare, Users, TrendingUp, LogOut } from "lucide-react"

async function signOut() {
  "use server"
  const supabase = await createServerClient()
  await supabase.auth.signOut()
  redirect("/admin/login")
}

export default async function AdminDashboard() {
  const supabase = await createServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/admin/login")
  }

  // Check if user profile exists and has admin role
  let { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single()

  if (!profile) {
    // Create profile if it doesn't exist
    const { error } = await supabase.from("profiles").insert({
      id: user.id,
      email: user.email,
      full_name: user.user_metadata?.full_name || "Admin User",
      role: "admin",
    })

    if (!error) {
      profile = { role: "admin" }
    }
  }

  if (!profile || profile.role !== "admin") {
    redirect("/admin/login")
  }

  // Get dashboard stats
  const [{ count: blogsCount }, { count: reportsCount }, { count: leadsCount }, { count: testimonialsCount }] =
    await Promise.all([
      supabase.from("blogs").select("*", { count: "exact", head: true }),
      supabase.from("sample_reports").select("*", { count: "exact", head: true }),
      supabase.from("leads").select("*", { count: "exact", head: true }),
      supabase.from("testimonials").select("*", { count: "exact", head: true }),
    ])

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gradient">Admin Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {user.email}</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/">View Site</Link>
            </Button>
            <form action={signOut}>
              <Button variant="ghost" type="submit">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="card-gradient border-2 hover:border-purple-300 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="pt-2">
              <div className="text-3xl font-bold text-gradient mb-1">{blogsCount || 0}</div>
              <p className="text-xs text-muted-foreground">Total published posts</p>
            </CardContent>
          </Card>

          <Card className="card-gradient border-2 hover:border-purple-300 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sample Reports</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="pt-2">
              <div className="text-3xl font-bold text-gradient mb-1">{reportsCount || 0}</div>
              <p className="text-xs text-muted-foreground">Available samples</p>
            </CardContent>
          </Card>

          <Card className="card-gradient border-2 hover:border-purple-300 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Leads</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="pt-2">
              <div className="text-3xl font-bold text-gradient mb-1">{leadsCount || 0}</div>
              <p className="text-xs text-muted-foreground">Contact submissions</p>
            </CardContent>
          </Card>

          <Card className="card-gradient border-2 hover:border-purple-300 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Testimonials</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="pt-2">
              <div className="text-3xl font-bold text-gradient mb-1">{testimonialsCount || 0}</div>
              <p className="text-xs text-muted-foreground">Student reviews</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="card-gradient border-2 hover:border-purple-300 transition-colors">
            <CardHeader>
              <CardTitle className="text-gradient">Blog Management</CardTitle>
              <CardDescription>Create and manage blog posts</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full btn-gradient">
                <Link href="/admin/blogs">Manage Blogs</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="card-gradient border-2 hover:border-purple-300 transition-colors">
            <CardHeader>
              <CardTitle className="text-gradient">Sample Reports</CardTitle>
              <CardDescription>Upload and manage sample reports</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full btn-gradient">
                <Link href="/admin/reports">Manage Reports</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="card-gradient border-2 hover:border-purple-300 transition-colors">
            <CardHeader>
              <CardTitle className="text-gradient">Lead Management</CardTitle>
              <CardDescription>View and manage contact form submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full btn-gradient">
                <Link href="/admin/leads">Manage Leads</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
