

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  //useSidebar,
} from "@/components/ui/sidebar";

export function TeamSwitcher() {
  //const { isMobile } = useSidebar();
 
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
               <p className="text-[red]">R</p>
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                <div className='flex flex-col items-center'>
                    <h1 className=''><span className='text-[red]'>R E D</span> <span className="text-white">S H I F T</span></h1>
                    <span className='text-[grey] truncate text-xs'>N E T W O R K S</span>
                </div>
                </span>
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
