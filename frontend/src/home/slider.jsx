import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../src/index.css";

export default function Imageslider() {
  const props = [
    {
      image: "/Salad.png",
      title: "Fresh Salad with Vibrant Vegetables",
    },
    {
      image: "/veg.png",
      title: "Eat Fresh Vegitable and Fruits",
    },
    {
      image: "/Salad1.png",
      title: "Healthy Fruits and Nuts Mix",
    },
    {
      image: "/Water.png",
      title: "Refreshing SplashingWater 4 Liter PerDay",
    },
    {
      image: "/dry.png",
      title: "Healthy Dried Fruits and Nuts Mix",
    },
    {
      image: "/shake.png",
      title: "Protien Milshake",
    },
    {
      image: "/Roast.jpg",
      title: "Roasted Vegetables",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
  };
  return (
    <>
      <h2 className="pt-12 pl-3 text-xl font-bold">HEALTHY BENIFITS</h2>
      <div className=" h-60 w-[1300px] pt-12 pl-9  ">
        <div className=" h-60 m-auto">
          <Slider {...settings}>
            {props.map((item, index) => {
              return (
                <div className="bg-white rounded-lg h-80 align-middle space-y-9 shadow-xl border-2 border-black/50">
                  <div>
                    <img
                      className="size-52 object-contain block m-auto"
                      src={item.image}
                    />
                  </div>
                  <div className="p-2 ">
                    <p className="bg-[#cfe6cf] rounded-lg p-1 ">{item.title}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}
