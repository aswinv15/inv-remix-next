import { useState } from 'react'
import {
  Bars3Icon,
  UserGroupIcon,
  TableCellsIcon,
  ArrowTrendingUpIcon,
  PresentationChartBarIcon,
  ChartBarIcon,
  Cog8ToothIcon,
  UserCircleIcon,
  CpuChipIcon,
} from '@heroicons/react/20/solid'
import { LightBulbIcon } from '@heroicons/react/24/outline'
import { Button } from "@/components/ui/button";
import Link from 'next/link'

const menus = [
  {
    name: 'Dashboard',
    to: '/demo/dashboard/overview',
    icon: ChartBarIcon,
    current: true,
  },
  {
    name: 'Explorer',
    to: '/demo/dashboard/explore/sales',
    icon: TableCellsIcon,
    current: false,
  },
  {
    name: 'Optimizer',
    to: '/demo/dashboard/optimizer/optimize',
    icon: CpuChipIcon,
    current: false,
  },
  {
    name: 'Actions',
    to: '/demo/dashboard/actions/overview',
    icon: ArrowTrendingUpIcon,
    current: false,
  },
  {
    name: 'Kpi Tree',
    to: '/demo/dashboard/kpi/dragchart',
    icon: PresentationChartBarIcon,
    current: false,
  },
  {
    name: 'Coach',
    to: '/demo/dashboard/coach/chat',
    icon: UserGroupIcon,
    current: false,
  },
  { name: 'Insights', to: 'benchmarks', icon: LightBulbIcon, current: false },
  { name: 'Setting', to: '/settings', icon: Cog8ToothIcon, current: false },
  { name: 'App Bar', to: 'appbar', icon: Bars3Icon, current: false },
  { name: 'User', to: '/profile', icon: UserCircleIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar({sidebarMenu}) {
  const [open, setOpen] = useState(true)
  return (
    <div
      className={`bg-slate-50 shadow-lg  ${
        open ? 'w-24' : 'w-16'
      } text-gray-100 duration-500 `}
    >
      {/* <div className="py-1 flex justify-end"></div> */}
      {/* <div className="flex items-center justify-center bg-gray-100 py-1 ">
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <img
            className="cursor-poniter mx-auto h-14 w-14 justify-center "
            src={'/assets/logo-4.png'}
            alt="logo"
            onClick={() => setOpen(!open)}
          />
        </div> */}
      <div className="static  w-full mt-3 h-screen flex-1 space-y-1 px-2 border-r">
        {sidebarMenu?.map((item) => (
          <Link href={item.to} key={item.name}>
            <Button
              className={({ isActive }: { isActive: boolean }) =>
                classNames(
                  isActive
                    ? 'bg-sky-100 text-sky-500 border border-sky-500'
                    : 'text-slate-700 hover:bg-sky-50 hover:text-sky-500 hover:border hover:border-sky-500',
                  'group flex flex-col items-center rounded-md p-4'
                )
              }
            >
              <item.icon className="h-4 w-4" aria-hidden="true" />
              <h2 className="text-center text-xs font-medium">{item?.name}</h2>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  )
}
