'use client';
import Image from 'next/image';
import * as React from 'react';
// import {
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
//   useUser
// } from '@clerk/nextjs';
import { Separator } from "@/components/ui/separator";

// import { NavigationRisk } from './navigationrisk';

export function Header() {
  return (
   <div className="ml-16">
    <header className=" sticky top-0 z-50 flex items-center justify-between max-w-full h-16 px-4 shrink-0 bg-white">
        <div className="flex items-center justify-end space-x-2">
        <div className="flex items-center text-sky-500 text-lg ">
        <h1 className='text-3xl font-bold'>Inventory Optimizer</h1>
          {/* <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
            <UserButton />
          </React.Suspense> */}
        </div>
        {/* <ThemeToggle /> */}
      </div>

      

  

    
      <div className="">
         <Image
                className="mr-2"
                src="/assets/SN.png"
                alt="logo"
                width={50}
                height={50}
              />
      
      </div>
    
      </header>
      <Separator className="w-full"/> 
      </div>
  );
}