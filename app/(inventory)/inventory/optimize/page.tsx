'use client'


import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
// import { getSubmittedoptimize } from '@/models/optimize.server'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import DemoContainer from '@/components/lowes/DemoContainer'



// export const loader = async () => {
//   const submittedList = await getSubmittedoptimize()
//   // console.log(submittedList)

//   return json({ submittedList })
// }

// function DemoContainer({
//   className,
//   ...props
// }: React.HTMLAttributes<HTMLDivElement>) {
//   return (
//     <div
//       className={cn(
//         'flex items-center justify-center [&>div]:w-full',
//         className
//       )}
//       {...props}
//     />
//   )
// }
export default function Optimizer() {


  return (
    <>
      <div className="m-2">
        <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
          <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
            <div className="p-2">Risk Analyzer</div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-b-lg pb-2">
          <div className="items-start justify-center gap-6 rounded-lg p-4 md:grid lg:grid-cols-2 xl:grid-cols-2">
            <div className="col-span-2 grid items-start  gap-2 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1 ">
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1 ">
                    <CardTitle className="text-2xl flex">
                      Scenario Summary
                    </CardTitle>

                    <div className="border-b" />
                  </CardHeader>

                  <CardContent className="grid gap-4 space-y-4">
                    <div className="flex items-center space-x-4">
                      <span className="font-semibold">
                        Select for Optimization
                      </span>
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Scenario" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Scenario</SelectLabel>
                            {/* {submittedList.map((scenario) => (
                              <SelectItem
                                key={scenario.scenario_id}
                                value={scenario.scenario_id ?? ''}
                              >
                                {scenario.scenario_id ?? ''}
                              </SelectItem>
                            ))} */}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-4 ">
                      <span className="w-[160px] font-semibold">
                        Spare threshold
                      </span>
                      <Input
                        className="w-[180px]"
                        type="email"
                        id="email"
                        placeholder="20"
                      />
                    </div>

                    <div className="flex items-center space-x-4 ">
                      <span className="w-[160px] font-semibold">
                        Number of Knives
                      </span>
                      <Input
                        className="w-[180px]"
                        type="email"
                        id="email"
                        placeholder="0"
                      />
                    </div>

                    <form className="flex border-t justify-center pt-4">
                      <Button
                        type="submit"
                        name="start"
                        value="yes"
                        className="text-base bg-blue-500  text-white hover:bg-blue-600"
                      >
                        Optimize
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>

            <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">
                      Optimization Parameters
                    </CardTitle>
                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid gap-4 space-y-4">
                    <div className="flex items-center space-x-4 ">
                      <span className="w-[160px] font-semibold">
                        Optimization Status
                      </span>
                      <Input
                        className="w-[290px]"
                        type="email"
                        id="email"
                        placeholder="Completed @ 1:51:32 PM - 2/23/2021"
                      />
                    </div>

                    <div className="flex items-center space-x-4 ">
                      <span className="w-[160px] font-semibold">
                        Solver Status
                      </span>
                      <Input
                        className="w-[290px]"
                        type="email"
                        id="email"
                        placeholder="OPTIMAL"
                      />
                    </div>

                    <div className="flex items-center space-x-4 ">
                      <span className="w-[160px] font-semibold">Job ID</span>
                      <Input
                        className="w-[290px]"
                        type="email"
                        id="email"
                        placeholder="eeeb3265-3cf4-44f4-944d-ea7dad4c12ed"
                      />
                    </div>
                    <form className="flex border-t justify-center pt-4">
                      <Button
                        type="submit"
                        name="start"
                        value="yes"
                        className="text-base bg-blue-500  text-white hover:bg-blue-600"
                      >
                        Log
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
