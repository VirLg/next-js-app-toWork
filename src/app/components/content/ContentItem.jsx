import React from 'react';
import Developer from '../icons/male-programmer-svgrepo-com.svg';
const ContentItem = () => {
  return (
    <div className="ml-4 mt-1 w-[650px] h-[300px] outline outline-2 outline-offset-2 p-6">
      <div className="border-2 border-sky-500 w-[60px] h-[60px] rounded-md">
        <img src={Developer.src} alt="male" width={'60px'} height={'60px'} />
      </div>
      <h2 className="card-font" style={{ textAlign: 'center' }}>
        Strong emploie brand
      </h2>
      <h1 className="text-center">Sales Development Representative </h1>
      <div className="flex">
        <div className="w-[68px] h-[28px] bg-sky-500 rounded-md">
          <span className="text-gray-200 text-base ">Remote</span>
        </div>
        <h3 className="card-font"> Singapore, India, Philippines</h3>
      </div>
      <ul className="flex items-baseline">
        <li className="clock card-font card-li">Full Time</li>
        <li className="bag card-font card-li ">Expertize</li>
        <li className="wallet card-font card-li ">Company Persents</li>
      </ul>
      <div className="flex justify-between mt-6">
        <ul>
          <li className="card-font card-li ">fantastic work</li>
          <li className="card-font card-li ">Attractive Salary</li>
          <li className="card-font card-li ">Company Persents</li>
        </ul>
        <button>Apply</button>
      </div>
    </div>
  );
};

export default ContentItem;
