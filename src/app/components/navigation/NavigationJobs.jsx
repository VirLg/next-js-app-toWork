import React from 'react';
import Link from 'next/link';
import * as NavigationsItem from './NavigationData';
const NavigationJobs = () => {
  return (
    <div>
      <h2>Navigation Jobs</h2>

      <div class=" group  hover:bg-slate-100 w-[200px] h-[100px]">
        <div className="group invisible hover:bg-slate-200 group-hover:visible ">
          {NavigationsItem.NavigationJobs.map((el, idx) => {
            return (
              <li className="">
                <Link href={el.href}>
                  <span className="text-xs text-lime-100">{el.label}</span>
                </Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavigationJobs;
