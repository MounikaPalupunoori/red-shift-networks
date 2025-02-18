/* eslint-disable react/prop-types */


import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { useEffect, useState } from "react";

export function NavMain({ items }) {
  const [setActiveNavItem]=useState();
  const [pathname] = useState(window.location.pathname);

  useEffect(() => {
      const splitUrl = pathname.split('/');
      let captilal = ''
      captilal = splitUrl[1]?.charAt(0).toUpperCase() + splitUrl[1]?.slice(1);
      const menuItems = ['Main Dashboard',];
      if (menuItems.includes(captilal)) {
          setActiveNavItem(captilal);
      }
  }, [pathname]);
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon className='text-white'/>}
                  <span className="text-[white]">{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" color="white"/>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title} style={{ backgroundColor: pathname === subItem.url ? '#3757F7' : ''}}>
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url}>
                          <span className="text-white">{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
