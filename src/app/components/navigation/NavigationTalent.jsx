import React from 'react';
import Link from 'next/link';
import * as NavigationsItem from './NavigationData';

const NavigationTalent = () => {
  return (
    <div>
      <h2>Navigation Talent</h2>

      <div class=" group  hover:bg-slate-100 w-[200px] h-[400px]">
        <div className="group invisible hover:bg-slate-200 group-hover:visible ">
          {NavigationsItem.NavigationTalent.map((el, idx) => {
            return (
              <li className="">
                <Link href={el.href}>
                  <span className="text-sx text-lime-100">{el.label}</span>
                </Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavigationTalent;