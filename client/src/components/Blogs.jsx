import axios from "axios";
import BlogCard from "./BlogCard";
import React, { useEffect, useState } from 'react';
import { Toaster, toast } from "sonner";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  async function getBlogs() {
    try {
      const res = await axios.get("/api/posts");
      console.log(res);
      setBlogs(res?.data?.data);
      toast.success("Loading Blogs..")
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  }

  useEffect(() => {
    getBlogs();
  }, []);

  function handleClick(id) {
    console.log(id);
    localStorage.setItem('blogId', id);
  }

  return (
    <div>
    <Toaster/>
      <div className="text-center mt-5">
        <h2 className="text-2xl font-bold">Latest from our blog</h2>
        <p className="text-gray-500 font-light">Create custom Blogs in this new Generation</p>
      </div>
      <div className="flex justify-evenly flex-wrap items-center">
        {blogs?.length < 1 ? <h1>No Blog Posted Yet...</h1> :
          blogs?.map((blog) =>
            <BlogCard
              key={blog._id}
              title={blog.title} 
              content={blog.content} 
              category={blog.category} 
              publishingDate={blog.publishingDate} 
              imageUrl={blog.imageUrl}
              onClick={() => handleClick(blog._id)} 
            />
          )}
      </div>
    </div>
  );
}

export default Blogs;
