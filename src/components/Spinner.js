import React from 'react'
import spinner from './spinner.gif';

const Spinner = () => {
    return (
      <div className='text-center'>
        <img className='mb-3' src={spinner} alt="loading" style={{height: '2rem'}}/>
      </div>
    )
}

export default Spinner;