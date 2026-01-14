import React from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/BlogHero";
import BlogCard from "@/components/BlogCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogPosts } from "@/lib/blogs";

const Blog = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Header />
      
      <BlogHero 
        title="Blog"
        breadcrumbItems={breadcrumbItems}
      />

      <main className="flex-1 bg-background py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                image={post.image}
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
