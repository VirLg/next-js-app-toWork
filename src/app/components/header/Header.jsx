import React from 'react';
import Navigation from '../navigation/Navigation';
import BanerPage from '../baner/BanerPage';

export default function Header() {
  return (
    <header className=" w-[1600px]  header h-[164px] p-6  fixed">
      <div>
        <Navigation />
        <BanerPage />
      </div>
    </header>
  );
}
