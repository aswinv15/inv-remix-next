'use client'
import { Header } from '@/components/header-net'

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

import SidebarDemo from '@/components/snop/SidebarDemo'

const trackmenus = [
  {
    name: 'Order',
    to: '/track/order',
    icon: ChartBarIcon,
    current: true,
  },
  {
    name: 'Product',
    to: '/track/product',
    icon: TableCellsIcon,
    current: false,
  },
  {
    name: 'Customer',
    to: '/track/customer',
    icon: CpuChipIcon,
    current: false,
  },
  {
    name: 'Supplier',
    to: '/track/supplier',
    icon: ArrowTrendingUpIcon,
    current: false,
  },
]
export default function Index({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
 
        <Header />
        <div className="flex h-screen ">
          <SidebarDemo sidebarMenu={trackmenus} />
          <div className="flex flex-1 flex-col overflow-y-auto bg-slate-50">
            {children}
          </div>
        </div>
   
    </div>
  )
}
