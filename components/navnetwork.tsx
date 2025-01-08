'use client'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


const navigation = [
  { name: 'Network', to: '/network/config', current: true },
  { name: 'Track & Trace', to: '/track/order', current: false },
  { name: 'Events', to: '/events', current: false },
  { name: 'Planning', to: '/planning', current: false },
  // { name: 'Execution', to: '/execution/store', current: false }
];
export function NavigationNetwork() {
  const pathname = usePathname()
  return (
      <nav >
        <div className="w-full">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <div className="flex items-baseline space-x-4">
                {navigation?.map(item => (
                  <Link
                    href={item.to}
                    key={item.name}
                    className={classNames(
                      'rounded-md px-2 py-2 text-xs font-semibold',
                      pathname === item.to
                        ? 'bg-sky-500 text-white border border-sky-500'
                        : 'text-primary hover:bg-sky-500 hover:text-white'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
  )
}