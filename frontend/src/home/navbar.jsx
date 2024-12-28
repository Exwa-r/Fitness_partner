import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="h-screen shadow-lg gap-10 bg-[#cfe6cf] w-32 flex flex-col items-center">
        <h2>FitMeal Partner</h2>
        <ul className="gap-2 flex flex-col items-center">
          <li className="bg-[#014801] px-6 rounded-lg text-white">Home</li>
          <li>About Us</li>
          <li>Category</li>
          <li>Blogs</li>
          <li>Profile</li>
        </ul>
        <p className="">Sign Out</p>
      </div>
    </>
  );
}
