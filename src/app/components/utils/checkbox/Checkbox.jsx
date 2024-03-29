'use client';
import React from 'react';

const Checkbox = ({ idx, data, handleCheckLoc }) => {
  const handleCheck = e => {
    const value = {
      checked: e.target.checked,
      id: e.target.id,
    };
    handleCheckLoc(value);
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
                // value={checka?.complplited}
                checked={el.checked}
              />
              {el.label}
            </label>
          </div>
        );
      })}
    </>
  );
};

export default Checkbox;
