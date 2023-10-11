import { useState } from 'react';
import PropTypes from 'prop-types';

const AgeCalculatorForm = ({ calculateAge }) => {
  const [birthDate, setBirthDate] = useState('');

  const handleChangeDate = (e) => {
    setBirthDate(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    calculateAge(birthDate);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'
    >
      <input
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        value={birthDate}
        type='date'
        onChange={handleChangeDate}
      />
      <br/>
      <br/>
      <button
        className='mb-2 btn bg-info text-white disabled:bg-slate-400 '
        disabled={!birthDate}
        type='submit'
      >
        Calculate Age
      </button>
    </form>
  );
};

AgeCalculatorForm.propTypes = {
  calculateAge: PropTypes.func.isRequired,
};

export default AgeCalculatorForm;