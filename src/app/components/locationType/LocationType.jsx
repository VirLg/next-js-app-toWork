import React from 'react';
import { LokationData } from '../utils/data/dataSidebar';
import Checkbox from '../utils/checkbox/Checkbox';
const LocationType = () => {
  return (
    <div className="mt-6">
      <hr />
      <h2>Location Type</h2>
      <Checkbox data={LokationData} />
    </div>
  );
};

export default LocationType;
