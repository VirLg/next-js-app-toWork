'use client';
import React from 'react';
import NavigationJobs from './NavigationJobs';
import NavigationTalent from './NavigationTalent';
import NavigationResources from './NavigationResources';
import Link from 'next/link';
import Logo from '../icons/logo.svg';

const Navigation = ({ navItems }) => {
  return (
    <div className="flex">
      <Link href="/">
        <img src={Logo.src} alt="logo" width={'60px'} />
      </Link>
      <NavigationJobs />
      <NavigationTalent />
      <NavigationResources />
    </div>
  );
};

export default Navigation;
