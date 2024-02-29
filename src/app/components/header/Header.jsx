import React from 'react';
import Navigation from '../navigation/Navigation';
import Overley from '../overley/Overley';

export default function Header() {
  return (
    <header className="w-[1600px]  header h-[120px] p-6  fixed">
      <div className="">
        <Navigation />
      </div>
    </header>
  );
}
