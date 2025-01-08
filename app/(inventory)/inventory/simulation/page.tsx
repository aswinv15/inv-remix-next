'use client'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from '@/components/ui/select'
  import SimulationChart from '@/components/lowes/SimulationChart'

  
  
  export default function InventoryIndex() {
  
    return (
      <>
        <div className="m-4">
          <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
            <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
              <div className="p-2">Inventory Simulation for SKU</div>
              <div className="flex items-center space-x-4">
                <Select>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="SKU" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Scenario</SelectLabel>
                      {/* {skuList.map((sku) => (
                        <SelectItem key={sku.title} value={sku.title}>
                          {sku.title}
                        </SelectItem>
                      ))} */}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
  
          <div className="">
            <SimulationChart />
          </div>
        </div>
      </>
    )
  }
  