import React from "react";

export default function Components() {
  return (
    <div className="flex gap-2">
      <div className="flex bg-green-700 p-4 rounded-lg gap-5 ml-2">
        <div className="flex flex-col w-28 justify-center gap-3">
          <h6 className="bg-[#014801] p-3 rounded-lg text-white flex justify-center">
            Today
          </h6>
          <ul className="flex flex-col gap-3  items-center">
            <li className="bg-[#cfe6cf] p-2 rounded-lg">Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
            <li>Snacks</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 justify-center">
            <div className="bg-blue-700 rounded-lg gap-2 p-4 flex flex-col items-center">
              <img src="/milk.png" className="size-24" alt="" />
              <p>1/2 Glass Milk</p>
            </div>
            <div className="bg-blue-700 rounded-lg p-4 gap-2 flex flex-col items-center">
              <img src="/apple.png" className="size-24" alt="" />
              <p>1 Apple</p>
            </div>
            <div className="bg-blue-700 rounded-lg p-4 gap-2 flex flex-col items-center">
              <img src="/bread.png" className="size-24" alt="" />
              <p>2 Bread</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <p className="bg-white rounded-lg p-1">
              Today Target - 243 Calorie
            </p>
            <p className="bg-white rounded-lg p-1">
              Your Customize - 567 Calories
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black w-[450px] rounded-lg">Calories</div>
      <div className="bg-red-700 w-[320px] rounded-lg">Today Extra Meals</div>
    </div>
  );
}
