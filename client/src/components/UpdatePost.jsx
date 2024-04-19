import React, { useEffect, useState } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from "axios";
import {Toaster,toast} from "sonner"

const UpdatePost = ( ) => {
  // State variable for form data
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    imageUrl: ''
  });
  
  const postId=localStorage.getItem("updateId")
  console.log(postId)
  // Fetch post data by postId and set the form data
  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const res = await axios.get(`/api/post/${postId}`);
        const postData = res.data.data;
        setFormData({
          title: postData.title,
          content: postData.content,
          category: postData.category,
          imageUrl: postData.imageUrl
        });
      } catch (error) {
        toast.error("Failed To Failed..")
        console.error("Error fetching post:", error);
      }
    };

    fetchPostData();
  }, [postId]);

  // Handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const res = await axios.put(`http://localhost:2000/api/updatePost/${postId}`, formData);
      console.log(res);
      toast.success("Update Successfully..")

      // Reset form data after successful update
      setFormData({
        title: '',
        content: '',
        category: '',
        imageUrl: ''
      });
    } catch (error) {
      console.error("Error updating post:", error);
      toast.error("Post Update Failed..")
    }
  };

  useEffect(() => {
    const editor = ClassicEditor
      .create(document.querySelector('#content'))
      .then(editor => {
        editor.model.document.on('change:data', () => {
          const data = editor.getData();
          setFormData(prevState => ({
            ...prevState,
            content: data
          }));
        });
      })
      .catch(error => {
        console.error(error);
      });

    return () => {
      editor.then(editor => {
        editor.destroy();
      });
    };
  }, []);

  // Handler for input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Update the corresponding form data field
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
    <Toaster />
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="title" className="block text-lg font-medium text-gray-800 mb-1">Update Title</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" required />
        </div>

        <div className="mb-6">
          <label htmlFor="content" className="block text-lg font-medium text-gray-800 mb-1">Update Content</label>
          <textarea id="content" name="content" value={formData.content} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" rows="3" />
        </div>

        <div className="mb-6">
          <label htmlFor="category" className="block text-lg font-medium text-gray-800 mb-1">Update Category</label>
          <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" required />
        </div>

        <div className="mb-6">
          <label htmlFor="imageUrl" className="block text-lg font-medium text-gray-800 mb-1">Update Thumbnail Image URL</label>
          <input type="text" id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" required />
        </div>

        <div className="flex justify-end">
          <button type="submit" className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePost;
