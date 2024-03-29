import React from 'react';
import Input from '../utils/input/Input';
import LocationType from '../locationType/LocationType';
import Function from '../function/Function';
import Industry from '../industry/Industry';
import JobType from '../jobType/JobType';
import JobEngagement from '../jobEngagement/JobEngagement';
const Sidebar = () => {
  return (
    <div className="w-[390px] border-2 border:color-zinc-300 bg-zinc-50 p-4  ">
      <Input />
      <LocationType />
      <Function />
      <Industry />
      <JobType />
      <JobEngagement />
    </div>
  );
};

export default Sidebar;
