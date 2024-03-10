'use client';
import React from 'react';

const CheckboxFunction = ({ idx, data, handleCheckLocFunction }) => {
  const handleCheck = e => {
    const value = {
      checked: e.target.checked,
      id: e.target.id,
    };
    handleCheckLocFunction(value);
  };
  console.log('dataElem', data);
  return (
    <>
      {data.map((el, idx) => {
        return (
          <div className="flex-col " key={idx}>
            <label>
              <input
                type="checkbox"
                id={el.idxEl}
                onChange={handleCheck}
                className="mr-4"
                // value={el.checked}
                checked={el.checked}
                width={'35px'}
              />
              {el.label}
            </label>
          </div>
        );
      })}
    </>
  );
};

export default CheckboxFunction;
