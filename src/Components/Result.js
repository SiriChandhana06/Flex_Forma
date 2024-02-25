import React from "react";
import { useLocation, Link } from "react-router-dom";
const Result = () => {
  const location = useLocation();
  const { state } = location;
  const { bmiValue } = state || {};

  let resultMessage = "";
  let nutrientTips = "";

  if (bmiValue) {
    if (bmiValue < 20) {
      resultMessage = (
        <div className="pt-6">
          <p className="custom4 text-bold">You are underweight</p>
        </div>
      );
      nutrientTips = (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-black rounded-lg shadow-md p-6 custom1 pt-4 mt-4">
            <p className="text-lg font-semibold mb-3">Foods to Follow</p>
            <ul className="list-disc list-inside">
              <li className="pb-2">
                Almonds, cashews, peanuts, and walnuts are rich in healthy fats,
                proteins, and calories. Nut butters like peanut butter or almond
                butter can be spread on toast, crackers, or fruits for added
                calories.
              </li>
              <li className="pb-2">
                Whole grains like oats, quinoa, brown rice, and whole wheat
                bread are rich in complex carbohydrates, fiber, and nutrients.
                They provide sustained energy and can be incorporated into meals
                like breakfast porridge, salads, or as a side dish
              </li>
              <li className="pb-2">
                Chicken breast, turkey, fish, eggs, tofu, and legumes are
                excellent sources of protein. Include them in meals to support
                muscle growth and repair.
              </li>
            </ul>
          </div>
          <div className="bg-black rounded-lg shadow-md p-6 custom1 mt-4">
            <p className="text-lg font-semibold mb-3">Customized Exercises</p>
            <ul>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="bg-black rounded-lg shadow-md p-6 custom1 mt-4">
            <p className="text-lg font-semibold mb-3">You will Achieve</p>
            <p>
              The concept of BMI was developed by Belgian mathematician Adolphe
              Quetelet in the 19th century.
            </p>
          </div>
        </div>
      );
    } else if (bmiValue >= 20 && bmiValue <= 24) {
      resultMessage = (
        <p className="custom3 text-bold"> "You have normal weight"</p>
      );
      nutrientTips = (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-black rounded-lg shadow-md p-6 custom1 mt-4 ml-4">
            <p className="text-lg font-bold mb-3">
              Customized Foods for You
              <p className="text-sm font-normal clr">
                Mon-Sat(Choose 1 for a day)
              </p>
            </p>

            <div className="flex justify-content">
              <ul className="pr-20 font-semibold list-disc list-inside">
                BreakFast
                <li className=""></li>
                <li></li>
                <li> </li>
                <p></p>
                <li></li>
                <li></li>
                <p>Lunch</p>
                <li></li>
                <li></li>
                <li></li>
                <p>Evening Snack</p>
                <li></li>
                <li></li>
                <li></li>
                <p>Dinner</p>
                <li></li>
                <li></li>
                <li></li>
              </ul>

              <ul className="pr-24 font-semibold list-disc list-inside">
                Calories
                <li></li>
                <li></li>
                <li></li>
                <br />
                <br></br>
                <li></li>
                <li></li>
                <br />
                <li></li>
                <li></li>
                <li></li>
                <br />
                <li></li>
                <li></li>
                <li></li>
                <br />
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="bg-black rounded-lg shadow-md p-6 custom1 mt-4 mr-2 ml-2">
            <p className="text-lg font-semibold mb-3">Customized Exercises</p>
            <p>
              Engage in regular aerobic exercises to burn calories and improve
              cardiovascular health.
            </p>
          </div>
          <div className="bg-black rounded-lg shadow-md p-6 custom1 mt-4 mr-6">
            <p className="text-lg font-semibold mb-3">Benefits</p>
            <p>
              Consult a healthcare professional for personalized advice on
              weight management and lifestyle changes.
            </p>
          </div>
        </div>
      );
    } else {
      resultMessage = <p className="custom2  text-bold">You are overweight</p>;
      nutrientTips = (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-black rounded-lg shadow-md p-6 custom1 mt-4 ml-4">
            <p className="text-lg font-bold mb-3">
              Customized Foods
              <p className="text-sm font-normal clr">
                Mon-Sat(Choose 1 for a day)
              </p>
            </p>

            <div className="flex justify-content">
              <ul className="pr-20 font-semibold list-disc list-inside">
                BreakFast
                <li className="">Whole grain toast(1)</li>
                <li>Egg whites (2 large)</li>
                <li>Oatmeal (1/2 cup <br/> &nbsp; &nbsp; &nbsp; cooked) </li>
                <p>Mid-Morn snack</p>
                <li>Apple (medium)</li>
                <li>Almonds (1/4 cup)</li>
                <p>Lunch</p>
                <li>Steamed vegetables(1c)</li>
                <li>Baked Chicken(100g)</li>
                <li>Brwon Rice(1 cup)</li>
                <p>Evening Snack</p>
                <li>Dry fruits(1/4 cup)</li>
                <li>Chick peas</li>
                <li>Yogurt</li>
                <p>Dinner</p>
                <li>Steamed broccoli</li>
                <li>Vegetable Salad</li>
                <li>Soups</li>
              </ul>

              <ul className="pr-24 font-semibold list-disc list-inside">
                Calories
                <li>70</li>
                <li>34</li>
                <li>150</li>
                <br />
                <br></br>
                <li>95</li>
                <li>160</li>
                <br />
                <li>100</li>
                <li>165</li>
                <li>216</li>
                <br />
                <li>120</li>
                <li>148</li>
                <li>59</li>
                <br />
                <li>55</li>
                <li>14</li>
                <li>200</li>
              </ul>
            </div>
          </div>
          <div className="bg-black rounded-lg shadow-md p-6 custom1 mt-4 mr-2 ml-2">
            <p className="text-lg font-semibold mb-3">Customized Exercises</p>
            <p>
              Engage in regular aerobic exercises to burn calories and improve
              cardiovascular health.
            </p>
          </div>
          <div className="bg-black rounded-lg shadow-md p-6 custom1 mt-4 mr-6">
            <p className="text-lg font-semibold mb-3">Benefits</p>
            <p>
              Consult a healthcare professional for personalized advice on
              weight management and lifestyle changes.
            </p>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="bg-black text-white">
      <Link to="/" className="text-white pl-5 mt-10 font-bold text-2xl">
        {">"}
      </Link>

      {bmiValue ? (
        <div>
          <div className="flex justify-center pb-4">
            <p className="text-3xl text-white font-bold">{resultMessage}</p>
          </div>
          <div className="pt-10 flex justify-center">
            <span className="text-white text-center font-bold text-6xl">
              {bmiValue}
            </span>
          </div>
          {nutrientTips}
        </div>
      ) : (
        <p>No BMI value found</p>
      )}
      <div className="flex justify-end mt-28 pt-32">
        {/* <img src={img} alt='img' className='h-60 w-60'/> */}
      </div>
    </div>
  );
};

export default Result ;