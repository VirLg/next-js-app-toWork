'use client';
import React, { useState } from 'react';
import { FunctionData } from '../utils/data/dataSidebar';
import CheckboxFunction from '../utils/checkbox/CheckboxFunction';
const Function = () => {
  const [data, setData] = useState(FunctionData);

  const handleCheckLocFunction = value => {
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
      <h2>Location Type</h2>

      <CheckboxFunction
        handleCheckLocFunction={handleCheckLocFunction}
        data={data}
      />
    </div>
  );
};

export default Function;
