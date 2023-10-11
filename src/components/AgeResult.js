import PropTypes from 'prop-types';

const AgeResult = ({ age }) => {
  return (
    <h4 className='mt-10 text-2xl font-bold '>
      You are {age.years} years, {age.months} months old
    </h4>
  );
};

AgeResult.propTypes = {
  age: PropTypes.shape({
    years: PropTypes.number.isRequired,
    months: PropTypes.number.isRequired,
    
  }),
};

export default AgeResult;