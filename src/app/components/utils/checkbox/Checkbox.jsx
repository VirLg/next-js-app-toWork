'use client';
import React from 'react';

const Checkbox = ({ idx, data, handleCheckLoc }) => {
  const handleCheck = e => {
    // console.log('e.target', e.target.checked);
    // console.log('e.target', e.target.id);
    const value = {
      checked: e.target.checked,
      id: e.target.id,
    };
    handleCheckLoc(value);
  };
  console.log('dataElem', data);
  return (
    <div className="flex-col ">
      {data.map((el, idx) => {
        return (
          <label key={idx}>
            <input
              type="checkbox"
              id={el.idxEl}
              onChange={handleCheck}
              className="mr-4"
              // value={checka?.complplited}
              checked={el.checked}
            />
            {el.label}
          </label>
        );
      })}
    </div>
  );
};

export default Checkbox;
