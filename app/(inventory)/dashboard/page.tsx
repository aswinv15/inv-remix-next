'use client';

import { PrinterIcon } from '@heroicons/react/24/outline';
import {
  FilePlusIcon,
  Pencil2Icon,
  TrashIcon,
  DownloadIcon
} from '@radix-ui/react-icons';

import { kpiService_m } from '@/app/data/dashboard/inventoryData';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import CardLayout from '@/components/snop/CardLayout';


export function Icontooltip() {
  return (
    <div className="m-2 space-x-1">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="bg-indigo-100 ">
              <FilePlusIcon className="text-indigo-700 size-6 " />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>New</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="bg-purple-100">
              <Pencil2Icon className="text-purple-700 size-6 " />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Edit</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="bg-red-100">
              <TrashIcon className="text-red-700 size-6 " />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Delete</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="bg-yellow-100">
              <PrinterIcon className="text-yellow-800 size-6 " />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Print</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="bg-green-100">
              <DownloadIcon className="text-green-700 size-6 " />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Download</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default function Flowchart() {
  return (
    <>
      <div className="m-4">
        <div className="w-100 my-2 flex  justify-between p-4 rounded-lg border bg-white">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
            Availability Analytics
          </h2>

          <div className="flex items-center justify-end"></div>
        </div>

        <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
          <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
            <div className="p-2">Inventory Dashboard</div>
            <Icontooltip />
          </div>
        </div>

        <div>
          {' '}
          <main>
            <CardLayout kpiData={kpiService_m} />
          </main>
        </div>
      </div>
    </>
  );
}
