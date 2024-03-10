'use client';
import React, { useState, useEffect } from 'react';
import { LokationData } from '../utils/data/dataSidebar';
import Checkbox from '../utils/checkbox/Checkbox';
import { abort } from 'process';
const LocationType = () => {
  const [data, setData] = useState(LokationData);
  // const [dataComplited, setDataComplited] = useState(null);

  // const checkedValue = LokationData.reduce(
  //   (a, b) => ({
  //     ...a,
  //     label: b.label,
  //     option: false,
  //   }),
  //   {}
  // );
  const handleCheckLoc = value => {
    console.log('value', value);

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
    //   // const c = [{ idx: id, complplited: checked }];
    //   // console.log('value.checked', checked);
    //   // console.log('value.checked', id);
    //   // check.reduce(
    //   //   (_, val) => ({
    //   //     ...val,
    //   //   }),
    //   //   []
    //   // );
    setData(a);
  };
  console.log('first', data);
  return (
    <div className="mt-6">
      <hr />
      <h2>Location Type</h2>

      <Checkbox handleCheckLoc={handleCheckLoc} data={data} />
    </div>
  );
};

export default LocationType;
