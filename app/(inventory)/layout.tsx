import { Header } from "@/components/headershadcn";

interface ChatLayoutProps {
  children: React.ReactNode;
}

export default async function ChatLayout({ children }: ChatLayoutProps) {
  return (
    <div className="h-full">
       <Header />
      
      {/* <div className="relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden"> */}
      {/* <SidebarDesktop /> */}
      {children}
    </div>
  );
}