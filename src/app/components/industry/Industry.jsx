'use client';
import React, { useState } from 'react';
import { IndustryData } from '../utils/data/dataSidebar';
import Checkbox from '../utils/checkbox/Checkbox';
const Industry = () => {
  const [data, setData] = useState(IndustryData);

  const handleCheckLoc = value => {
    const a = data.map((el, idx) => {
      if (idx === Number(value.id)) {
        return {
          ...el,
          checked: value.checked,
        };
      } else {
        return el;
      }
    });

    setData(a);
  };
  console.log('first', data);
  return (
    <div className="mt-6">
      <hr />
      <h2>Industry</h2>

      <Checkbox handleCheckLoc={handleCheckLoc} data={data} />
    </div>
  );
};

export default Industry;
