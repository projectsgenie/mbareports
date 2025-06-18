"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/hooks/use-toast"
import { getSupabaseClient } from "@/lib/supabase"
import { Loader2, Upload, Save } from "lucide-react"
import { slugify } from "@/lib/utils"

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featured_image?: string
  published: boolean
}

interface BlogPostFormProps {
  blogPost?: BlogPost
}

export function BlogPostForm({ blogPost }: BlogPostFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [title, setTitle] = useState(blogPost?.title || "")
  const [slug, setSlug] = useState(blogPost?.slug || "")
  const [excerpt, setExcerpt] = useState(blogPost?.excerpt || "")
  const [content, setContent] = useState(blogPost?.content || "")
  const [featuredImage, setFeaturedImage] = useState(blogPost?.featured_image || "")
  const [published, setPublished] = useState(blogPost?.published || false)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(blogPost?.featured_image || null)

  const router = useRouter()
  const { toast } = useToast()
  const supabase = getSupabaseClient()

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value
    setTitle(newTitle)
    if (!blogPost) {
      setSlug(slugify(newTitle))
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      let imageUrl = featuredImage

      // Upload image if selected
      if (imageFile) {
        const fileName = `blog-${Date.now()}-${imageFile.name}`
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("blog-images")
          .upload(fileName, imageFile)

        if (uploadError) {
          throw new Error(`Image upload failed: ${uploadError.message}`)
        }

        // Get public URL
        const { data: urlData } = await supabase.storage.from("blog-images").getPublicUrl(fileName)
        imageUrl = urlData.publicUrl
      }

      const blogData = {
        title,
        slug,
        excerpt,
        content,
        featured_image: imageUrl,
        published,
        updated_at: new Date().toISOString(),
      }

      if (blogPost) {
        // Update existing blog post
        const { error } = await supabase.from("blogs").update(blogData).eq("id", blogPost.id)

        if (error) throw error

        toast({
          title: "Blog post updated",
          description: "Your blog post has been updated successfully.",
        })
      } else {
        // Create new blog post
        const { error } = await supabase.from("blogs").insert({
          ...blogData,
          created_at: new Date().toISOString(),
        })

        if (error) throw error

        toast({
          title: "Blog post created",
          description: "Your blog post has been created successfully.",
        })
      }

      router.push("/admin/blogs")
      router.refresh()
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter blog post title"
          required
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="slug">Slug</Label>
        <Input
          id="slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="enter-blog-post-slug"
          required
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="excerpt">Excerpt</Label>
        <Textarea
          id="excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="Brief summary of the blog post"
          required
          className="bg-background"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your blog post content here..."
          required
          className="bg-background"
          rows={10}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="featured-image">Featured Image</Label>
        <div className="flex items-center space-x-4">
          <Button
            type="button"
            variant="outline"
            className="w-40"
            onClick={() => document.getElementById("image-upload")?.click()}
          >
            <Upload className="h-4 w-4 mr-2" />
            {imagePreview ? "Change Image" : "Upload Image"}
          </Button>
          <Input id="image-upload" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
          {imagePreview && (
            <div className="relative w-20 h-20 rounded-md overflow-hidden">
              <img src={imagePreview || "/placeholder.svg"} alt="Preview" className="w-full h-full object-cover" />
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Switch id="published" checked={published} onCheckedChange={setPublished} />
        <Label htmlFor="published">Publish this blog post</Label>
      </div>

      <div className="flex justify-end space-x-4">
        <Button type="button" variant="outline" onClick={() => router.push("/admin/blogs")}>
          Cancel
        </Button>
        <Button type="submit" className="btn-gradient" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              {blogPost ? "Updating..." : "Creating..."}
            </>
          ) : (
            <>
              <Save className="h-4 w-4 mr-2" />
              {blogPost ? "Update Post" : "Create Post"}
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
