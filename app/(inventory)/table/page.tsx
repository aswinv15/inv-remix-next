'use client';
import { Button } from "@/components/ui/button"



import * as React from 'react';
import {
  Check,
  ChevronsUpDown,
  GalleryVerticalEnd,
  Search
} from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@//components/ui/dropdown-menu';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider, 
  SidebarRail,
  SidebarTrigger
} from '@/components/ui/sidebar';
import CustomersPage from '@/app/(inventory)/customers/page';
import AssetsconstraintsPage from '@/app/(inventory)/assetsconstraints/page';
import BomPage from '@/app/(inventory)/bom/page';
import CashaccountPage from '@/app/(inventory)/cashaccount/page';
import Co2facilitiesPage from '@/app/(inventory)/co2facilities/page';
import CustomconstraintsPage from '@/app/(inventory)/customconstraints/page'
import Co2processingsPage from '@/app/(inventory)/co2processing/page'
import DemandsPage from '@/app/(inventory)/demands/page'
import DemandforecastPage from '@/app/(inventory)/demandforecast/page'
import EventsPage from '@/app/(inventory)/events/page'
import FacilityexpensesPage from '@/app/(inventory)/facilityexpense/page'
import FleetsPage from '@/app/(inventory)/fleets/page'
import GroupsPage from '@/app/(inventory)/groups/page'
import IndicatorconstraintsPage from '@/app/(inventory)/indicatorconstraints/page'
import InventoryPage from '@/app/(inventory)/inventory/page' 
import LinearrangesPage from '@/app/(inventory)/linearranges/page';
import LoadingunloadinggatePage from '@/app/(inventory)/loadingunloadinggate/page'
import LocationgroupsPage from '@/app/(inventory)/locationgroups/page'
import LocationsPage from '@/app/(inventory)/locations/page'
import MilkrunsPage from '@/app/(inventory)/milkruns/page'
import ObjectivemembersPage from '@/app/(inventory)/objectivemembers/page'
import OrderingrulesPage from '@/app/(inventory)/orderingrules/page'
import PathsPage from '@/app/(inventory)/paths/page'
import PaymenttermsPage from '@/app/(inventory)/paymentterm/page'
import PeriodgroupsPage from '@/app/(inventory)/periodgroups/page' 
import PeriodsPage from '@/app/(inventory)/periods/page'
import ProductsPage from '@/app/(inventory)/products/page'
import ProcessingcostsPage from '@/app/(inventory)/processingcost/page'
import ProcessingtimePage from '@/app/(inventory)/processingtime/page'
import ProductgroupsPage from '@/app/(inventory)/productgroups/page'
import ProductflowsPage from '@/app/(inventory)/productflows/page'
import ProductstoragesPage from '@/app/(inventory)/productstorages/page'
import Production_nosPage from '@/app/(inventory)/production_no/page'
import SalesbatchesPage from '@/app/(inventory)/salesbatches/page'
import ShippingPage from '@/app/(inventory)/shipping/page'
import SitestatechangesPage from '@/app/(inventory)/sitestatechange/page'
import SourcingPage from '@/app/(inventory)/sourcing/page'
import SuppliersPage from '@/app/(inventory)/suppliers/page'
import TariffsPage from '@/app/(inventory)/tariffs/page'
import TimewindowsPage from '@/app/(inventory)/timewindow/page'
import UnitconversionsPage from '@/app/(inventory)/unitconversions/page'
import UnitsPage from '@/app/(inventory)/units/page'
import VehicleselectionsPage from '@/app/(inventory)/vehicleselections/page'
import VehicletypesPage from '@/app/(inventory)/vehicleTypes/page'
import FacilitiesPage from '@/app/(inventory)/facilities/page'
const data = {
  versions: ['1.0.1', '1.1.0-alpha', '2.0.0-beta1'],
  navMain: [

    {
      title: 'Building Your Application',
      href: '#',
      items: [
        {
          title: 'assetsConstraints',
          href: '#',
          content: <AssetsconstraintsPage/>
        }, 
         {
          title: 'bom',
          href: '',
          content: <BomPage />
        },
         {
          title: 'cashaccount',
          href: '',
          content: <CashaccountPage />
        }, 
         {
          title: 'customers',
          href: '',
          content: <CustomersPage />
        }, 
         {
          title: 'co2facilities',
          href: '',
          content: <Co2facilitiesPage />
        },
        {
          title: 'customconstraints',
          href: '',
          content: <CustomconstraintsPage />
        },
        {
          title: 'co2processing',
          href: '',
          content: <Co2processingsPage />
        },
        {
          title: 'demands',
          href: '#',
          content: <DemandsPage />
        },
        {
          title: 'demandforecast',
          href: '#',
          content: <DemandforecastPage />
        },
        {
          title: 'events',
          href: '#',
          content: <EventsPage />
        },
        {
          title: 'facilities',
          href: '#',
          content: <FacilitiesPage />
        },
        {
          title: 'facilityexpenses',
          href: '#',
          content: <FacilityexpensesPage />
        },
        {
          title: 'fleets',
          href: '#',
          content: <FleetsPage />
        },
        {
          title: 'groups',
          href: '#',
          content: <GroupsPage />
        },
        {
          title: 'indicatorconstraints',
          href: '#',
          content: <IndicatorconstraintsPage />
        },
        {
          title: 'inventory',
          href: '#',
          content: <InventoryPage />
        },
        {
          title: 'linearrangers',
          href: '',
          content: <LinearrangesPage />
        }, {
          title: 'groups',
          href: '#',
          content: <GroupsPage />
        },
        {
          title: 'indicatorconstraints',
          href: '#',
          content: <IndicatorconstraintsPage />
        },
        {
          title: 'inventory',
          href: '#',
          content: <InventoryPage />
        },
        {
          title: 'linearrangers',
          href: '',
          content: <LinearrangesPage />
        }, {
          title: 'loadingunloadinggate',
          href: '#',
          content: <LoadingunloadinggatePage />
        },
        {
          title: 'locationgroups',
          href: '#',
          content: <LocationgroupsPage />
        },
        {
          title: 'locations',
          href: '#',
          content: <LocationsPage />
        },
        {
          title: 'milkruns',
          href: '#',
          content: <MilkrunsPage />
        }, {
          title: 'objectivemembers',
          href: '#',
          content: <ObjectivemembersPage />
        },
        {
          title: 'orderingrules',
          href: '#',
          content: <OrderingrulesPage />
        },
        {
          title: 'paths',
          href: '#',
          content: <PathsPage />
        },
        {
          title: 'paymentterms',
          href: '#',
          content: <PaymenttermsPage />
        }, {
          title: 'periodgroups',
          href: '#',
          content: <PeriodgroupsPage />
        },
        {
          title: 'periods',
          href: '#',
          content: <PeriodsPage />
        },
        {
          title: 'products',
          href: '#',
          content: <ProductsPage />
        },
        {
          title: 'processingcosts',
          href: '#',
          content: <ProcessingcostsPage />
        },

        {
          title: 'processingtime',
          href: '#',
          content: <ProcessingtimePage />
        }, {
          title: 'productgroups',
          href: '#',
          content: <ProductgroupsPage />
        },
        {
          title: 'productflows',
          href: '#',
          content: <ProductflowsPage />
        },
        {
          title: 'productstorages',
          href: '#',
          content: <ProductstoragesPage />
        },

        {
          title: 'production_no',
          href: '#',
          content: <Production_nosPage />
        }, {
          title: 'salebatches',
          href: '#',
          content: <SalesbatchesPage />
        },
        {
          title: 'shipping',
          href: '#',
          content: <ShippingPage />
        },
        {
          title: 'sitestatechanges',
          href: '#',
          content: <SitestatechangesPage />
        },

        {
          title: 'sourcing',
          href: '#',
          content: <SourcingPage />
        }, {
          title: 'suppliers',
          href: '#',
          content: <SuppliersPage />
        }, {
          title: 'tariffs',
          href: '#',
          content: <TariffsPage />
        },
        {
          title: 'timewindows',
          href: '#',
          content: <TimewindowsPage />
        },
        {
          title: 'unitconversions',
          href: '#',
          content: <UnitconversionsPage />
        },

        {
          title: 'units',
          href: '#',
          content: <UnitsPage />
        },
        {
          title: 'vehicleselections',
          href: '#',
          content: <VehicleselectionsPage />
        },

        {
          title: 'vehicletypes',
          href: '#',
          content: <VehicletypesPage />
        },
        // {
        //   title: 'Rendering',
        //   href: '#',
        //   content: 'Explore various rendering techniques and optimizations.'
        // },
        // {
        //   title: 'Caching',
        //   href: '#',
        //   content: 'Implement caching strategies for better performance.'
        // }
      ]
    },
    {
      title: 'API Reference',
      href: '#',
      items: [
        {
          title: 'Components',
          href: '#',
          content: 'Detailed documentation of all available components.'
        },
        {
          title: 'File Conventions',
          href: '#',
          content: 'Learn about the file naming conventions and organization.'
        }
      ]
    }
  ]
};

export default function AppSidebar() {
  const [selectedVersion, setSelectedVersion] = React.useState(
    data.versions[0]
  );
  const [selectedItem, setSelectedItem] = React.useState(
    data.navMain[1].items[1]
  );

  return (
    <SidebarProvider>
      <div className="flex w-full h-screen">
        <Sidebar>
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton
                      size="lg"
                      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    >
                      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                        <GalleryVerticalEnd className="size-4" />
                      </div>
                      <div className="flex flex-col gap-0.5 leading-none">
                        <span className="font-semibold">Documentation</span>
                        <span className="">v{selectedVersion}</span>
                      </div>
                      <ChevronsUpDown className="ml-auto" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-[--radix-dropdown-menu-trigger-width]"
                    align="start"
                  >
                    {data.versions.map((version) => (
                      <DropdownMenuItem
                        key={version}
                        onSelect={() => setSelectedVersion(version)}
                      >
                        v{version}{' '}
                        {version === selectedVersion && (
                          <Check className="ml-auto" />
                        )}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
            <form>
              <SidebarGroup className="py-0">
                <SidebarGroupContent className="relative">
                  <Label htmlFor="search" className="sr-only">
                    Search
                  </Label>
                  <SidebarInput
                    id="search"
                    placeholder="Search the docs@/app/(inventory)."
                    className="pl-8"
                  />
                  <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
                </SidebarGroupContent>
              </SidebarGroup>
            </form>
          </SidebarHeader>
          <SidebarContent>
            {data.navMain.map((section) => (
              <SidebarGroup key={section.title}>
                <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {section.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={item === selectedItem}
                          onClick={() => setSelectedItem(item)}
                        >
                          <button>{item.title}</button>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </SidebarContent>
          <SidebarRail />
        </Sidebar>
        <SidebarInset className="flex-1">
          {/* <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    {
                      data.navMain.find((section) =>
                        section.items.some((item) => item === selectedItem)
                      )?.title
                    }
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{selectedItem.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header> */}
          <div className="p-6">
            {/* <h2 className="text-2xl font-bold mb-4">{selectedItem.title}</h2> */}
            <p>{selectedItem.content}</p>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
