import React from 'react'

const Input = ({ value,type, placeholder, w='w-100', pad ='pl-10' }) => {
    return (
      <div>
    <input 
      type={type} 
      value={value}
      placeholder={placeholder}
      className={`${w} p-2 ${pad} border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
    />

  </div>
     
    );
  };
  

  

export default Input
