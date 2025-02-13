import { blogPosts } from "@/lib/blog-data"
import Image from "next/image"
import { notFound } from "next/navigation"
// import { RelatedPosts } from "@/components/related-posts"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex justify-between text-gray-500 mb-6">
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>
        <div className="relative h-64 mb-8">
          <Image src={post.imageUrl || "/placeholder.svg"} alt={post.title} fill className="object-cover rounded-lg" />
        </div>
        <div className="prose max-w-none">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
      {/* <RelatedPosts currentPostId={post.id} festival={post.festival} /> */}
    </div>
  )
}

