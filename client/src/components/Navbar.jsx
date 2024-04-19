import {Link} from "react-router-dom"
import React from 'react';

const Navbar = () => {
  return (
    <header className="">
    <div className="px-4 mx-auto sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16 lg:h-20">
        <div className="flex-shrink-0">
          <a href="#" title="" className="flex">
            {/* <img
              className="w-auto h-8"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/logo.svg"
              alt=""
            /> */}
            <h1 className="text-3xl font-bold">BlogSheets</h1>
          </a>
        </div>

        <button
          type="button"
          className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100"
        >
          <svg
            className="block w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <svg
            className="hidden w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
          <Link
            to="/"
            className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
          >
            {" "}
            Home{" "}
          </Link>

          <Link
            to="#"
            className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
          >
            {" "}
            About{" "}
          </Link>

          <Link
            to="#"
            className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
          >
            {" "}
            Contact{" "}
          </Link>

          <div className="w-px h-5 bg-black/20"></div>

          <Link
            to="#"
            title=""
            className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
          >
            {" "}
            Log in{" "}
          </Link>

          <Link
            to="createPost"
            title=""
            className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
            role="button"
          >
            {" "}
            Add Post{" "}
          </Link>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Navbar
