import React, { useState } from "react";
import Header from "./header";
import ExtraMealPopup from "./Extrameal";
import TodayExtraMeals from "./todayextra";

export default function Components() {
  const [showPopup, setShowPopup] = useState(false);
  const [extraMeals, setExtraMeals] = useState([]);

  const handleAddMeal = (meal) => {
    setExtraMeals([...extraMeals, meal]);
  };

  const totalCalories = extraMeals.reduce(
    (total, meal) => total + meal.calories,
    0
  );

  return (
    <>
      <Header onAddMeal={() => setShowPopup(true)} />
      {showPopup && (
        <ExtraMealPopup
          onClose={() => setShowPopup(false)}
          onSave={handleAddMeal}
        />
      )}
      <div className="flex gap-2 bg-white p-3 ml-3">
        <div className="flex p-4 rounded-lg gap-5 ml-2">
          <div className="flex flex-col w-28 justify-center gap-3">
            <h6 className="bg-[#014801] p-3 rounded-lg text-white flex justify-center">
              Today
            </h6>
            <ul className="flex flex-col gap-3 items-center">
              <li className="bg-[#cfe6cf] p-2 rounded-lg">Breakfast</li>
              <li>Lunch</li>
              <li>Dinner</li>
              <li>Snacks</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 justify-center">
              <div className="border-2 border-black/50 rounded-lg gap-2 p-4 flex flex-col items-center">
                <img src="/milk.png" className="size-24" alt="" />
                <p>1/2 Glass Milk</p>
              </div>
              <div className="border-2 border-black/50 rounded-lg p-4 gap-2 flex flex-col items-center">
                <img src="/apple.png" className="size-24" alt="" />
                <p>1 Apple</p>
              </div>
              <div className="border-2 border-black/50 rounded-lg p-4 gap-2 flex flex-col items-center">
                <img src="/Bread.png" className="size-24" alt="" />
                <p>2 Bread</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <p className="bg-[#cfe6cf] rounded-lg p-1">
                Today Target - 243 Calorie
              </p>
              <p className="bg-[#cfe6cf] rounded-lg p-1">
                Your Customize - {totalCalories} Calories
              </p>
            </div>
          </div>
        </div>
        <TodayExtraMeals extraMeals={extraMeals} />
        <div className="bg-[#cfe6cf] w-[320px] rounded-lg p-3">
          <h3 className="font-semibold text-xl">Calories Chart</h3>
          <ul>
            {extraMeals.map((meal, index) => (
              <li key={index} className="mb-2">
                {meal.name}: {meal.calories} Calories
              </li>
            ))}
          </ul>
          <p className="font-bold mt-2">Total Calories: {totalCalories}</p>
        </div>
      </div>
    </>
  );
}
