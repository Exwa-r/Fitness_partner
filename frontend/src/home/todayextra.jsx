import React from "react";

export default function TodayExtraMeals({ extraMeals }) {
  return (
    <div className="bg-[#cfe6cf] w-[400px] rounded-lg">
      <h3 className="p-3 text-xl font-semibold">Today Extra Meals</h3>
      <ul className="p-3">
        {extraMeals.map((meal, index) => (
          <li key={index} className="bg-white p-2 rounded-lg mb-2">
            <p>
              <strong>{meal.meal}</strong> - {meal.grams}g ({meal.type})
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
