import React from 'react';
import { FunctionData } from '../utils/data/dataSidebar';
import Checkbox from '../utils/checkbox/Checkbox';
const Function = () => {
  return (
    <div className="mt-6">
      <hr />
      <h2>Function</h2>
      <Checkbox data={FunctionData} />
    </div>
  );
};

export default Function;
