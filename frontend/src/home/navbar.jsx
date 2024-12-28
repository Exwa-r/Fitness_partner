import React, { useState } from "react";

export default function App() {
  const [activePage, setActivePage] = useState("Home");

  const pages = {
    Home: <h1>Welcome to Home</h1>,
    "About Us": <h1>About Us</h1>,
    Category: <h1>Category</h1>,
    Blogs: <h1>Blogs</h1>,
    Profile: <h1>Profile</h1>,
  };

  return (
    <div className="flex">
      <div className="h-screen shadow-lg gap-10 bg-[#cfe6cf] w-32 flex flex-col items-center pl-2 pr-2">
        <h2>FitMeal Partner</h2>
        <ul className="gap-2 flex flex-col items-center">
          {Object.keys(pages).map((page) => (
            <li
              key={page}
              className={`px-6 rounded-lg cursor-pointer ${
                activePage === page ? "bg-[#014801] text-white" : ""
              }`}
              onClick={() => setActivePage(page)}
            >
              {page}
            </li>
          ))}
        </ul>

        <div className="mt-auto mb-4">
          <p className="cursor-pointer">Sign Out</p>
        </div>
      </div>
    </div>
  );
}
