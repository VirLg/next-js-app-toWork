import React from 'react';
import Navigation from '../navigation/Navigation';
import Overley from '../overley/Overley';

export default function Header() {
  return (
    <header className="container  header h-[120px] p-6 m-auto fixed">
      <div className="flex  justify-between items-center">
        <Navigation />
      </div>
    </header>
  );
}
{
  /* <ul className=" flex justify-center ">
        <li className="mr-10 hover:text-slate-300 tracking-widest text-2xl">
          <Link href="/main">Main</Link>
        </li>

        <li className="mr-10 hover:text-slate-300 tracking-widest text-2xl">
          <Link href="/home">Home</Link>
        </li>
        <li className="mr-10 hover:text-slate-300 tracking-widest text-2xl">
          <Link href="/statistics">Statistics</Link>
        </li>
        <li className="hover:text-slate-300 tracking-widest text-2xl">
          <Link href="/about">About</Link>
        </li>
      </ul> */
}
