import React from 'react';
import Input from '../utils/input/Input';
import LocationType from '../locationType/LocationType';
import Function from '../function/Function';
const Sidebar = () => {
  return (
    <div className="w-[400px] border-2 border:color-zinc-300 bg-zinc-50 p-4  ">
      <Input />
      <LocationType />
      <Function />
    </div>
  );
};

export default Sidebar;
