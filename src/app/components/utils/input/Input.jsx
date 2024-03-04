'use client';
import React, { useState } from 'react';

const Input = ({ props }) => {
  const [value, setValue] = useState('');
  const handleChange = ({ target }) => {
    setValue(target.value);
  };
  return (
    <div>
      <label className="">
        Job Title
        <input
          type="text"
          placeholder="Search ..."
          name="value"
          value={value}
          onChange={handleChange}
          className="border-4 border zinc-300 rounded-md 
          placeholder:text-zinc-400 block bg-white w-full border   py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 base:text-base text-zinc-600
          h-[40px]"
        />
      </label>
    </div>
  );
};

export default Input;
