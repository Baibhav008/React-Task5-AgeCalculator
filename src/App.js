import { useState } from 'react';
import AgeCalculatorForm from './components/AgeCalculatorForm';
import AgeResult from './components/AgeResult';
import 'bootstrap/dist/css/bootstrap.css';

import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from 'date-fns';
import './App.css';

function App() {

  const [age, setAge] = useState(null);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const ageYears = differenceInYears(today, birthDateObj);
    const ageMonths = differenceInMonths(today, birthDateObj) % 12;
    const ageDays = differenceInDays(
      today,
      new Date(today.getFullYear(), today.getMonth(), birthDateObj.getDate())
    );

    setAge({
      years: ageYears,
      months: ageMonths
     
    });
  };

  return (
    <section className='bg-white'>
      <div className='py-8 px-4 mx-auto text-center mt-5 '>
        <p className='mb-4 text-lg' style={{fontSize:35}}>
          <b>Age Calculator</b>
          
        </p>
        <p className='mb-8 text-lg ' style={{fontSize:20}}>
          <b>Enter your date of birth</b>
        </p>
        <AgeCalculatorForm calculateAge={calculateAge} />

        {age && <AgeResult age={age} />}
      </div>
    </section>
  );
}

export default App;
