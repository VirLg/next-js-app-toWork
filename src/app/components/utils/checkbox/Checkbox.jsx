import React from 'react';

const Checkbox = ({ data }) => {
  return data.map(el => {
    return (
      <div className="flex-col ">
        <label>
          <input
            type="checkbox"
            id="scales"
            name="scales"
            checked
            className="mr-4"
          />
          {el.label}
        </label>
      </div>
    );
  });
};

export default Checkbox;
