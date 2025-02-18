import { AppSidebar } from "./Sidebar/appsidebar";
import { Outlet,} from "react-router-dom";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import LayoutHeader from "./DashLayoutHeader";
export default function DashboarLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-[60px] shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center w-full h-full border-b-2">
            <SidebarTrigger className="-ml-1" />
           <LayoutHeader/>
          </div>
        </header>
        <div className='flex flex-col overflow-hidden' style={{width:'100%'}}>
                <div className='overflow-y-auto' style={{height:'calc(100vh - 60px)'}}>
                <Outlet />
                </div>
            </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
