import React from 'react';
import Link from 'next/link';
import * as NavigationsItem from './NavigationData';
const NavigationResources = () => {
  return (
    <div className="group">
      <h2>Navigation Resource</h2>

      <div className="absolute top-[100px] left-[470px]  group-hover:bg-sky-500 w-[280px] h-[100px]">
        <ul className="group invisible hover:bg-sky-500 group-hover:visible ">
          {NavigationsItem.NavigationResource.map((el, idx) => {
            return (
              <li className="group hover:bg-zinc-300 pl-5" key={idx}>
                <Link href={el.href}>
                  <span className="text-lime-100 group-hover/edit:translate-x-0.5 hover:bg-zinc-300 hover:text-gray-800">
                    {el.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavigationResources;
