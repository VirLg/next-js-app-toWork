'use client';
import React from 'react';

const Checkbox = ({ data, handleCheckLoc }) => {
  const handleCheck = e => {
    handleCheckLoc(e.target);
  };
  return data.map((el, idx) => {
    return (
      <div className="flex-col " key={idx}>
        <label>
          <input
            type="checkbox"
            id={idx}
            onChange={handleCheck}
            className="mr-4"
            // value={checka?.complplited}
            // checked={checka?.complplited}
          />
          {el.label}
        </label>
      </div>
    );
  });
};

export default Checkbox;
