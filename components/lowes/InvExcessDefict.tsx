'use client'
import { useState } from 'react'
import { AgChartsReact } from 'ag-charts-react'

import {
  generatedDeficitData,
  generatedInventoryExcess,
} from '@/app/data/agGrid/snop/inventory/excessDeficit'
import 'ag-charts-enterprise'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { Progress } from '@/components/ui/progress'




const inventory = [
  {
    title: 'SKU-775833',
    location: 'Location016',
    deficit: '1.9M',
    percent: 9,
  },
  {
    title: 'SKU-569018',
    location: 'Location017',
    deficit: '0.6M',
    percent: 20,
  },
  {
    title: 'SKU-166046',
    location: 'Location018',
    deficit: '1.8M',
    percent: 58,
  },
  {
    title: 'SKU-144887',
    location: 'Location019',
    deficit: '0.4M',
    percent: 76,
  },
]
const deficit = [
  {
    title: 'SKU-775833',
    location: 'Location016',
    deficit: '1.9M',
    percent: 9,
  },
  {
    title: 'SKU-569018',
    location: 'Location017',
    deficit: '0.6M',
    percent: 20,
  },
  {
    title: 'SKU-166046',
    location: 'Location018',
    deficit: '1.8M',
    percent: 58,
  },
  {
    title: 'SKU-144887',
    location: 'Location019',
    deficit: '0.4M',
    percent: 76,
  },
]
const dataExcess = generatedInventoryExcess
const dataDeficit = generatedDeficitData


export default function InvExcessDefict() {
  const [options, setOptions] = useState({
    data: dataExcess,
    series: [
      {
        type: 'treemap',
        labelKey: 'title',
        secondaryLabelKey: 'excess',
        sizeKey: 'percent',
        sizeName: 'Excess',
        fills: ['#43A047'],
        group: {
          label: {
            fontSize: 18,
            spacing: 2,
          },
          secondaryLabel: {
            formatter: (params) => `£${params.value.toFixed(1)}bn`,
          },
        },
      },
    ],
    // title: {
    //   text: '',
    // },
    // subtitle: {
    //   text: '',
    // },
  })
  const [options2, setOptions2] = useState({
    data: dataDeficit,
    series: [
      {
        type: 'treemap',
        labelKey: 'title',
        secondaryLabelKey: 'deficit',
        sizeKey: 'percent',
        sizeName: 'Deficit',
        strokes: ['#000'],
        fills: ['#FF5722'],
        group: {
          label: {
            fontSize: 18,
            spacing: 2,
          },
          secondaryLabel: {
            formatter: (params) => `£${params.value.toFixed(1)}bn`,
          },
        },
      },
    ],
    // title: {
    //   text: '',
    // },
    // subtitle: {
    //   text: '',
    // },
  })

  return (
    <div className="bg-white rounded-b-lg border  w-100">
      {/* <div className="bg-white">
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 sm:hidden"
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <form className="mt-4">
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.name}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? '-rotate-180' : 'rotate-0',
                                      'h-5 w-5 transform'
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 text-sm text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <section aria-labelledby="filter-heading">
          <h2 id="filter-heading" className="sr-only">
            Filters
          </h2>

          <div className="border-b border-gray-200 bg-white py-2">
            <div className="mr-64 flex items-center  px-4 sm:px-4 lg:px-4">
              <Menu as="div" className="relative inline-block text-left">
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? 'font-medium text-gray-900'
                                  : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
                onClick={() => setOpen(true)}
              >
                Filters
              </button>

              <div className="hidden sm:block">
                <div className="flow-root">
                  <Popover.Group className="-mx-4 flex items-center divide-x divide-gray-200">
                    {filters.map((section, sectionIdx) => (
                      <Popover
                        key={section.name}
                        className="relative inline-block px-4 text-left"
                      >
                        <Popover.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                          <span>{section.name}</span>
                          {sectionIdx === 0 ? (
                            <span className="ml-1.5 rounded bg-gray-200 px-1.5 py-0.5 text-xs font-semibold tabular-nums text-gray-700">
                              1
                            </span>
                          ) : null}
                          <ChevronDownIcon
                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Popover.Panel className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <form className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </form>
                          </Popover.Panel>
                        </Transition>
                      </Popover>
                    ))}
                  </Popover.Group>
                </div>
              </div>

              <div className="ml-16  flex px-4 sm:flex sm:items-center sm:px-4 lg:px-4">
                <h3 className="text-sm font-medium text-gray-500">
                  Filters
                  <span className="sr-only">, active</span>
                </h3>

                <div
                  aria-hidden="true"
                  className="hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block"
                />

                <div className="mt-2 sm:ml-4 sm:mt-0">
                  <div className="-m-1 flex flex-wrap items-center">
                    {activeFilters.map((activeFilter) => (
                      <span
                        key={activeFilter.value}
                        className="m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pl-3 pr-2 text-sm font-medium text-gray-900"
                      >
                        <span>{activeFilter.label}</span>
                        <button
                          type="button"
                          className="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                        >
                          <span className="sr-only">
                            Remove filter for {activeFilter.label}
                          </span>
                          <svg
                            className="h-2 w-2"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 8 8"
                          >
                            <path
                              strokeLinecap="round"
                              strokeWidth="1.5"
                              d="M1 1l6 6m0-6L1 7"
                            />
                          </svg>
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> */}
      <div className="flex justify-between  space-x-4 ">
        <div className="w-full bg-white rounded-b-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">Title</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Excess</TableHead>
                <TableHead>Percent</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventory.map((invoice) => (
                <TableRow key={invoice.title}>
                  <TableCell className="font-medium">{invoice.title}</TableCell>
                  <TableCell className="font-medium">
                    {invoice.location}
                  </TableCell>
                  <TableCell className="font-medium">
                    {invoice.deficit}
                  </TableCell>
                  <TableCell>
                    <Progress
                      indicatorColor="bg-green-400"
                      value={invoice.percent}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="w-full h-[500px]">
            <AgChartsReact options={options} />
          </div>
        </div>
        <div className="w-full bg-white rounded-b-md border">
          <div className="">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="">Title</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Deficit</TableHead>
                  <TableHead>Percent</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {deficit.map((invoice) => (
                  <TableRow key={invoice.title}>
                    <TableCell className="w-100 font-medium">
                      {invoice.title}
                    </TableCell>
                    <TableCell className="w-100 font-medium">
                      {invoice.location}
                    </TableCell>
                    <TableCell className="w-100 font-medium">
                      {invoice.deficit}
                    </TableCell>
                    <TableCell className="w-200 ">
                      <Progress
                        indicatorColor="bg-red-400"
                        value={invoice.percent}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="w-full h-[500px]">
            <AgChartsReact options={options2} />
          </div>
        </div>
      </div>
    </div>
  )
}
