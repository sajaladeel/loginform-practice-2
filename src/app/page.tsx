
import React from 'react';

// import { Container } from './styles';

const Reusablecomp: React.FC = () => {
  return <div className="flex justify-center items center">
    <form className ="bg-gray-100 p-4 rounded max-w-md ">
      <h2 className='text-xl font-semibold mb-4 '>
        Login
      </h2>
      <input type ="text" 
      placeholder='Type your username'
      className='w-full p-2 mb-2 border'
      />

      <input type="text" 
      placeholder='Your password here'
      className='w-full p-2 mb-2 border'
      />

      <button
      type='submit'
      className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-800 '
      >Log in</button>
    </form>

  </div>
}

export default Reusablecomp;