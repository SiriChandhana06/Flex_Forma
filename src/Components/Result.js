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
            <p className="text-lg font-semibold mb-3">Benefits</p>
            <p className="font-semibold">
            Benefits of the Balanced Meal Plan:
            </p><br/>
            <div>
              <ul className="font-semibold list-disc list-inside">
              <li title="The meal plan provides a higher calorie intake,
              promoting a caloric surplus necessary for weight gain.">Caloric Surplus</li><br/>
              <li title="Meals include good sources of protein,
               supporting muscle development and repair.">Protein for Muscle Building</li><br/>
              <li title="Inclusion of healthy fats provides additional energy 
              and supports overall health.">Healthy Fats for Energy</li><br/>
              <li title="Whole grains, fruits, and vegetables offer complex carbohydrates, 
              providing sustained energy throughout the day.">Complex Carbohydrates for Sustained Energy</li><br/>
              <li title="The plan incorporates a variety of fruits, vegetables, and whole grains,
               ensuring a rich supply of vitamins, minerals, and fiber.">Micronutrients and Fiber</li><br/>
              <li title="Nutrient-dense foods contribute essential vitamins and minerals, 
              supporting overall health and well-being.">Nutrient Density</li><br/>
              <li title="Each meal includes a mix of carbohydrates, proteins, and fats,
               promoting a balanced and varied diet.">Balanced Meals</li><br/>
              <li title="The plan supports gradual weight gain, which is generally
               considered healthier and more sustainable.">Gradual Weight Gain</li><br/>
              </ul>
              <p className="font-semibold">Benefits of Exercise Suggestions:</p><br/>
              <ul className="font-semibold list-disc list-inside">
                <li title="Strength training exercises promote muscle development, 
                contributing to weight gain in the form of lean muscle mass.">Muscle Building</li><br/>
                <li title="Regular exercise can stimulate appetite, aiding in 
                the consumption of a higher calorie intake.">Increased Appetite</li><br/>
                <li title="Building muscle through strength training can boost metabolism,
                 assisting in the utilization of calories for energy.">Improved Metabolism</li><br/>
                <li title="Cardiovascular and bodyweight exercises contribute to overall health,
                 improving cardiovascular fitness, endurance, and flexibility.">Enhanced Overall Health</li><br/>
                <li title="Establishing a regular exercise routine promotes consistency
                 and helps individuals stay on track with their health goals.">Consistency and Routine</li><br/>
                <li title="Consulting with a fitness professional allows for a personalized exercise plan 
                tailored to individual needs and preferences">Personalized Approach</li><br/>
              </ul>
            </div>
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
                <li> Greek Yogurt <br/> &nbsp; &nbsp; &nbsp; (1/2 cup)</li><br/>
                <p>Lunch</p>
                <li>Grilled Chicken <br/> &nbsp; &nbsp; &nbsp; Breast (4 oz)</li>
                <li>Broccoli (1 cup)</li>
                <li>Quinoa <br/> &nbsp; &nbsp; (1/2 cupcooked)</li>
                <li>Cherry <br/> &nbsp; &nbsp; Tomatoes (1cup)</li><br/>
                <p>Evening Snack</p>
                <li> Almonds <br/> &nbsp; &nbsp; &nbsp; (1/4 cup)</li>
                <li> Apple slices</li><br/>
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
                <br /><br/>
                <li>180</li><br/>
                <li>55</li><br/>
                <li>110</li><br/>
                <li>30</li>
                <br /><br/>
                <li>200 </li><br/>
                <li>150</li>
                <br/><br/>
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
            <p className="font-semibold">Benefits of the Balanced Meal Plan:</p><br/>
            <div>
              <ul className="font-semibold list-disc list-inside">
              <li title="The meal plan includes a variety of nutrient-dense foods, 
              providing essential vitamins, minerals, 
              and antioxidants for overall health.">Nutrient-Rich Foods</li><br/>
              <li title="Each meal incorporates a mix of carbohydrates, proteins,
               and healthy fats, promoting a balanced and satisfying diet.">Balanced Macronutrients</li><br/>
              <li title="Whole grains, fruits, and vegetables contribute dietary fiber,
               supporting digestive health and regular bowel movements.">Fiber for Digestive Health</li><br/>
              <li title="Lean protein sources, such as chicken, salmon,
               and eggs, support muscle maintenance and repair.">Lean Protein for Muscle Maintenance</li><br/>
              <li title="Inclusion of sources like avocado and olive oil
               provides heart-healthy monounsaturated fats.">Healthy Fats for Heart Health</li><br/>
              <li title="The meal plan offers a moderate caloric intake suitable for maintaining
               a normal BMI without excessive caloric surplus or deficit.">Moderate Caloric Intake</li><br/>
              </ul>
              <p className="font-semibold">Benefits of Exercise Suggestions:</p><br/>
              <ul className="font-semibold list-disc list-inside">
                <li title="Regular cardiovascular exercise improves heart health, 
                enhances circulation, and helps maintain overall cardiovascular fitness.">Cardiovascular Health</li><br/>
                <li title="Strength training exercises preserve muscle mass, support joint health,
                 and contribute to overall strength and function.">Strength and Muscle Maintenance</li><br/>
                <li title="Activities like yoga and Pilates enhance
                 flexibility, balance, and mobility">Flexibility and Balance</li><br/>
                <li title="Exercise is linked to improved mood, reduced stress, 
                and enhanced cognitive function, contributing to mental well-being.">Mental Well-being</li><br/>
                <li title="Consistent physical activity helps in weight maintenance by
                 burning calories and supporting a healthy metabolism.">Weight Maintenance</li><br/>
                <li title="Weight-bearing and resistance exercises promote
                 bone health, reducing the risk of osteoporosis.">Bone Health</li><br/>
                <li title="Regular exercise is associated with improved sleep quality,
                 contributing to overall health and well-being.">Improved Sleep</li><br/>
                <li title="Engaging in group fitness activities or classes provide opportunities for
                 social interaction, fostering a sense of community and support.">Social Connection</li><br/>
              </ul>
            </div>
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
            <p className="font-semibold">Benefits of the Balanced Meal Plan:</p><br/>
            <div>
              <ul className="font-semibold list-disc list-inside">
              <li title="The meal plan offers a balanced caloric intake, 
              providing enough energy to support daily activities without
               excess calories that may contribute to weight gain.">Caloric Control</li><br/>
              <li title="The plan includes nutrient-dense foods, 
              offering essential vitamins, minerals, and antioxidants
               for overall health.">Nutrient-Dense Foods</li><br/>
              <li title="Each meal incorporates a mix of carbohydrates, proteins,
               and healthy fats, promoting a balanced and satisfying diet.">Balanced Macronutrients</li><br/>
              <li title="Whole grains, fruits, and vegetables contribute dietary fiber,
               promoting feelings of fullness and aiding in weight management.">Fiber for Satiety</li><br/>
              <li title="Protein sources like chicken, salmon, and Greek yogurt
               support muscle maintenance and help with satiety.">Lean Proteins for Muscle Maintenance</li><br/>
              <li title="Inclusion of sources like nuts, olive oil, and avocado
               provides healthy fats that contribute to satiety and overall well-being.">Healthy Fats for Satiety</li><br/>
              <li title="The meal plan encourages mindful eating
               and portion control, preventing overeating.">Portion Control</li><br/>
              </ul>
              <p className="font-semibold">Benefits of Exercise Suggestions:</p><br/>
              <ul className="font-semibold list-disc list-inside">
                <li title="Cardiovascular exercise and strength training contribute
                 to calorie burn, aiding in weight management.">Calorie Burn and Weight Management</li><br/>
                <li title="Regular aerobic exercise improves cardiovascular health,
                 reducing the risk of heart disease.">Cardiovascular Health</li><br/>
                <li title="Strength training exercises help maintain and tone muscle mass,
                 contributing to overall body composition.">Strength and Muscle Toning</li><br/>
                <li title="Both cardiovascular and strength training exercises
                 can boost metabolism, supporting weight management.">Improved Metabolism</li><br/>
                <li title="Exercise is associated with improved mood,
                 reduced stress, and enhanced mental well-being.">Enhanced Mood and Mental Well-being</li><br/>
                <li title="Regular physical activity contributes to
                 increased energy levels and overall vitality.">Increased Energy Levels</li><br/>
                <li title="Activities like yoga and Pilates improve flexibility and balance,
                 contributing to overall functional fitness.">Enhanced Flexibility and Balance</li><br/>
              </ul>
            </div>
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