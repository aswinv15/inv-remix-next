'use client'

import * as React from 'react'
import Image from 'next/image';

import { NavigationNetwork } from './navnetwork'
import Optimizer from '../app/(inventory)/inventory/optimize/page';




export function Header() {

  return (
    <header className="ml-20 sticky top-0 z-50 flex items-center justify-between max-w-full h-16 px-4 border-b shrink-0 bg-white">
      <div className="flex items-center text-sky-500 text-lg ">
        <h1>Inventory Optimizer</h1>
        <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
          {/* <UserOrLogin /> */}
        </React.Suspense>
      </div>
      <NavigationNetwork />
      <div >
      <Image
                className="mr-2"
                src="/assets/SN.png"
                alt="logo"
                width={50}
                height={50}
              />
      </div>
    </header>
  );
}
