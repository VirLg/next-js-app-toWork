'use client';
import React from 'react';
import NavigationJobs from './NavigationJobs';
import NavigationTalent from './NavigationTalent';
import NavigationResources from './NavigationResources';
import Link from 'next/link';
import Logo from '../icons/logo.svg';

const Navigation = ({ navItems }) => {
  return (
    <div className="container flex">
      <Link href="/">
        <img src={Logo.src} alt="logo" width={'60px'} height={'60px'} />
      </Link>
      <div className="flex gap-6 w-[700px] justify-between ml-[250px] relative">
        <NavigationJobs />
        <NavigationTalent />
        <NavigationResources />
      </div>
    </div>
  );
};

export default Navigation;
