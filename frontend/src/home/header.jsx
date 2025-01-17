import React from "react";

export default function Header({ onAddMeal }) {
  return (
    <header>
      <div className="flex pt-2 pb-3">
        <h2 className="ml-3 font-bold text-lg">Your Diet Planner</h2>
        <div className="flex ml-auto gap-4">
          <button
            className="bg-[#014801] px-4 py-1 rounded-lg text-white"
            onClick={onAddMeal}
          >
            Add Your Extra Meal
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-7 bg-[#014801] rounded-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
