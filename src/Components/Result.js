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
        <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 mx-4">
          <div className="bg-black rounded-lg shadow-md p-6 custom1 pt-4 mt-4">
            <p className="text-lg font-semibold mb-3">Customized Foods for You
            <p className="text-sm font-normal clr"> Mon-Sat(Choose 1 for a day)</p>
            </p>
            <div className="flex justify-content">
              <ul className="pr-20 font-semibold list-disc list-inside">
                BreakFast
                <li className="">Whole Grain <br/> &nbsp; &nbsp; &nbsp; Bagel (2 oz)  </li>
                <li>Cream Cheese  <br/> &nbsp; &nbsp; &nbsp; (2 tablespoons)</li>
                <li> Banana <br/> &nbsp; &nbsp;  (medium) </li>
                <li> Greek Yogurt<br/> &nbsp; &nbsp; &nbsp; (1 cup) </li>
                <li> Mixed Nuts  <br/> &nbsp; &nbsp; &nbsp; (1/4 cup)</li>
                <p>Lunch</p>
                <li>Whole Wheat <br/> &nbsp; &nbsp; &nbsp;Bread (2 slices)</li>
                <li>Turkey <br/> &nbsp; &nbsp;  Sandwich</li>
                <li>Brown Rice <br/> &nbsp; &nbsp; (1/2 cupcooked)</li>
                <li>Mixed <br/> &nbsp; &nbsp;  Vegetables(1cup)</li>
                <p>Evening Snack</p>
                <li> Trail Mix <br/> &nbsp; &nbsp; &nbsp; (1/2 cup)</li>
                <li> Cheese and <br/> &nbsp; &nbsp; &nbsp; Crackers (2 oz)</li>
                <p>Dinner</p>
                <li>Salmon Fillet <br/> &nbsp; &nbsp; &nbsp;(4 oz)</li>
                <li>Sweet Potato</li>
                <li>Quinoa (1/2 <br/> &nbsp; &nbsp; &nbsp; cup cooked)</li>
              </ul>

              <ul className="pr-24 font-semibold list-disc list-inside">
                Calories
                <br/>
                <li>200 </li><br/>
                <li>100 </li><br/>
                <li>105</li><br/>
                <li>140</li><br/>
                <li>150</li>
                <br/> <br/><br/>
                <li>160 </li><br/>
                <li>400</li><br/>
                <li>100</li><br/>
                <li>50</li>
                <br />
                <li>200 </li><br/>
                <li>200 </li>
                <br/><br/>
                <li>180</li><br/>
                <li>100 </li><br/>
                <li>110</li>
              </ul>
            </div>
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
        <div>
            <div className="pl-20 pt-28 pr-20 ">
              <h1 className="text-xl font-bold">
              BMI (Body Mass Index) is often categorized into different ranges to assess whether an individual falls into underweight, normal weight, overweight, or obese categories. Here are the general classifications:<br/></h1>
              <h1 className="pt-10 text-xl font-semibold">
              Underweight: BMI less than 18.5<br/>
              Normal weight: BMI between 18.5 and 24.9<br/>
              Overweight: BMI between 25 and 29.9<br/>
              Obese: BMI of 30 or greater <br/>
              Therefore, a normal BMI falls within the range of 18.5 to 24.9. It's important to note that BMI has its limitations and does not directly measure body fat or distribution
              </h1>
            </div>
          </div>
        </div>
      );
    } else if (bmiValue >= 20 && bmiValue <= 24) {
      resultMessage = (
        <p className="custom3 text-bold"> "You have normal weight"</p>
      );
      nutrientTips = (
        <div>
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
                <li className="">Whole Grain <br/> &nbsp; &nbsp; &nbsp; Toast (2 slices)</li>
                <li>Scrambled <br/> &nbsp; &nbsp; &nbsp; Eggs (2 eggs)</li>
                <li>Avocado (1/4) </li>
                <li>Mixed Berries <br/> &nbsp; &nbsp; &nbsp; (1/2 cup)</li>
                <li> Greek Yogurt <br/> &nbsp; &nbsp; &nbsp; (1/2 cup)</li>
                <p>Lunch</p>
                <li>Grilled Chicken <br/> &nbsp; &nbsp; &nbsp; Breast (4 oz)</li>
                <li>Broccoli (1 cup)</li>
                <li>Quinoa <br/> &nbsp; &nbsp; (1/2 cupcooked)</li>
                <li>Cherry <br/> &nbsp; &nbsp; Tomatoes (1cup)</li>
                <p>Evening Snack</p>
                <li> Almonds <br/> &nbsp; &nbsp; &nbsp; (1/4 cup)</li>
                <li> Apple slices</li>
                <p>Dinner</p>
                <li>Salmon Fillet <br/> &nbsp; &nbsp; &nbsp;(4 oz)</li>
                <li>Brown Rice<br/> &nbsp; &nbsp;  (1/2 cupcooked)</li>
                <li>Mixed Salad <br/> &nbsp; &nbsp; &nbsp;  Greens(1 cup)</li>
              </ul>

              <ul className="pr-24 font-semibold list-disc list-inside">
                Calories
                <br/>
                <li>160</li><br/>
                <li>140 </li><br/>
                <li>60</li><br/>
                <li>30</li><br/>
                <li>60</li>
                <br />
                <li>180</li><br/>
                <li>55</li><br/>
                <li>110</li><br/>
                <li>30</li>
                <br />
                <li>200 </li><br/>
                <li>150</li>
                <br />
                <li>180</li><br/>
                <li>100 </li><br/>
                <li>10</li>
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
        <div>
            <div className="pl-20 pt-28 pr-20 ">
              <h1 className="text-xl font-bold">
              BMI (Body Mass Index) is often categorized into different ranges to assess whether an individual falls into underweight, normal weight, overweight, or obese categories. Here are the general classifications:<br/></h1>
              <h1 className="pt-10 text-xl font-semibold">
              Underweight: BMI less than 18.5<br/>
              Normal weight: BMI between 18.5 and 24.9<br/>
              Overweight: BMI between 25 and 29.9<br/>
              Obese: BMI of 30 or greater <br/>
              Therefore, a normal BMI falls within the range of 18.5 to 24.9. It's important to note that BMI has its limitations and does not directly measure body fat or distribution
              </h1>
            </div>
          </div>
        </div>
      );
    } else {
      resultMessage = <p className="custom2  text-bold">You are overweight</p>;
      nutrientTips = (
        <div>
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
                <li className="">Whole grain <br/> &nbsp; &nbsp; &nbsp; toast (1)</li>
                <li>Egg whites <br/> &nbsp; &nbsp; &nbsp; (2 large)</li>
                <li>Oatmeal (1/2 <br/> &nbsp; &nbsp; &nbsp; cup cooked) </li>
                <p>Mid-Morn snack</p>
                <li>Apple <br/> &nbsp; &nbsp; &nbsp; (medium)</li>
                <li>Almonds <br/> &nbsp; &nbsp; &nbsp; (1/4 cup)</li>
                <p>Lunch</p>
                <li>Steamed <br/> &nbsp; &nbsp; &nbsp; vegetables (1c)</li>
                <li>Baked <br/> &nbsp; &nbsp; &nbsp; Chicken(100g)</li>
                <li>Brwon Rice <br/> &nbsp; &nbsp; &nbsp;(1 cup)</li>
                <p>Evening Snack</p>
                <li>Dry fruits <br/> &nbsp; &nbsp; &nbsp;(1/4 cup)</li>
                <li>Chick peas</li>
                <li>Yogurt</li>
                <p>Dinner</p>
                <li>Steamed <br/> &nbsp; &nbsp; &nbsp; broccoli</li>
                <li>Vegetable <br/> &nbsp; &nbsp; &nbsp; Salad</li>
                <li>Soups</li>
              </ul>

              <ul className="pr-24 font-semibold list-disc list-inside">
                Calories
                <li>70</li><br/>
                <li>34</li><br/>
                <li>150</li>
                <br />
                <br></br>
                <li>95</li><br/>
                <li>160</li><br/>
                <br />
                <li>100</li><br/>
                <li>165</li><br/>
                <li>216</li><br/>
                <br />
                <li>120</li><br/>
                <li>148</li>
                <li>59</li>
                <br />
                <li>55</li><br/>
                <li>14</li><br/>
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
        <div>
            <div className="pl-20 pt-28 pr-20 ">
              <h1 className="text-xl font-bold">
              BMI (Body Mass Index) is often categorized into different ranges to assess whether an individual falls into underweight, normal weight, overweight, or obese categories. Here are the general classifications:<br/></h1>
              <h1 className="pt-10 text-xl font-semibold">
              Underweight: BMI less than 18.5<br/>
              Normal weight: BMI between 18.5 and 24.9<br/>
              Overweight: BMI between 25 and 29.9<br/>
              Obese: BMI of 30 or greater <br/>
              Therefore, a normal BMI falls within the range of 18.5 to 24.9. It's important to note that BMI has its limitations and does not directly measure body fat or distribution
              </h1>
            </div>
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