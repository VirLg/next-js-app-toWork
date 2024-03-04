'use client';
import React, { useState, useEffect } from 'react';
import { LokationData } from '../utils/data/dataSidebar';
import Checkbox from '../utils/checkbox/Checkbox';
import { abort } from 'process';
const LocationType = () => {
  const [check, setChecked] = useState([]);
  // const checkedValue = LokationData.reduce(
  //   (a, b) => ({
  //     ...a,
  //     label: b.label,
  //     option: false,
  //   }),
  //   {}
  // );
  const handleCheckLoc = ({ checked, id }) => {
    const c = [{ idx: id, complplited: checked }];
    // console.log('value.checked', checked);
    // console.log('value.checked', id);

    check.reduce(
      (_, val) => ({
        ...val,
      }),
      []
    );

    console.log('a', check);
  };
  setChecked(handleCheckLoc);
  return (
    <div className="mt-6">
      <hr />
      <h2>Location Type</h2>
      <Checkbox
        data={LokationData}
        handleCheckLoc={handleCheckLoc}
        // checka={check}
      />
    </div>
  );
};

export default LocationType;
