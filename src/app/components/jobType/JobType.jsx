'use client';
import React, { useState } from 'react';
import { JobTypeData } from '../utils/data/dataSidebar';
import Checkbox from '../utils/checkbox/Checkbox';
const JobType = () => {
  const [data, setData] = useState(JobTypeData);

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
      <h2>Job Type</h2>

      <Checkbox handleCheckLoc={handleCheckLoc} data={data} />
    </div>
  );
};

export default JobType;
