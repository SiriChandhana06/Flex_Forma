import React, { useState } from 'react';
// import img from '../assets/Group 1.png';
import {useNavigate} from 'react-router-dom';


const Fitfusion = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const navigate = useNavigate();

  const calculateBMI = () => {
    if (height && weight) {
        console.log(bmi);
      const bmiValue = (weight / ((height / 100) * (height / 100))).toFixed(2);
      setBMI(bmiValue);
      navigate('/result', { state: { bmiValue } });
    } else {
      setBMI(null);
    }
  };

  return (
    <div className='bg-black h-full w-full pb-32'>

  
<div className='text-center pb-20'> 
<h2 className='pl-5 pt-50 font-bold text-3xl md:text-center text-white pt-10'>BMI CALCULATOR</h2>
</div>

      <div className='flex justify-center'>
<div className='custom  justify-center'>

      <h2 className='text-center pt-10 text-4xl text-white'>Check Your <span className='font-bold text-4xl'>BMI</span></h2>
      <label className='pl-5 text-3xl font-semibold'>
        <p className='pl-5 text-3xl font-semibold md: text-center text-white'>Height (cm):</p>
      </label>
      <div className='mx-5 my-3 md:flex md:justify-center md:my-3'>
        <input className='text-2xl font-semibold border-2 border-black rounded-xl'
        placeholder='  eg.126'
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          />
          </div>

      <label className='my-3 text-3xl font-semibold'>
       <p className='pl-5 text-3xl font-semibold md:text-center text-white'> Weight (kg):</p>
      </label>
      <div className='px-5 flex md:justify-center md:my-2'>
        <input className='text-2xl font-semibold border-2 border-black rounded-xl'
        placeholder='  eg.60'
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        />
        </div>
       
        <div className='flex justify-center pb-4 my-10'>
      <button className='rounded-xl p-2 text-3xl font-semibold text-white bg-red-700 hover:bg-red-300 hover:text-black ' onClick={calculateBMI}>Check BMI</button>
      </div>
        </div>
        </div>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7877602362549451"
     crossorigin="anonymous"></script>
       
    </div>
  );
};

export default Fitfusion;