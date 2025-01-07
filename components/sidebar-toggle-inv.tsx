import { useSidebar } from "@/lib/hooks/use-sidebar";

import logoAssetUrl from "@/public/images/logo1.png";
import Image from 'next/image'
export function SidebarToggle() {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      className="ml-4 flex  hover:bg-sky-500/20 hover:rounded-full hover:border border-white/10"
      onClick={() => {
        toggleSidebar();
      }}
    >
      <Image
        className="mx-auto p-1"
        src={logoAssetUrl}
        alt="logo"
        width={40}
        height={40}
      />

      <span className="sr-only">Toggle Sidebar</span>
    </button>
  );
}
