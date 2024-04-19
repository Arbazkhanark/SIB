import React from 'react';
import AddPost from "./components/AddPost"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SingleBlog from './components/SingleBlog';
import UpdatePost from './components/UpdatePost';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/createPost" element={<AddPost/>} />
        <Route path="/singlePost" element={<SingleBlog/>} />
        <Route path="/updatePost" element={<UpdatePost/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
