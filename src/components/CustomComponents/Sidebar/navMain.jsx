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
import { useLocation, useNavigate } from "react-router-dom";

export function NavMain({ items }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [openSections, setOpenSections] = useState({});

  useEffect(() => {
    const newOpenSections = {};
    items.forEach((item) => {
      newOpenSections[item.title] = item.items.some((subItem) => location.pathname === subItem.url);
    });
    setOpenSections(newOpenSections);
  }, [location.pathname]);

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            open={openSections[item.title]}
            onOpenChange={(isOpen) => setOpenSections((prev) => ({ ...prev, [item.title]: isOpen }))}

            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon className='text-white' />}
                  <span className="text-[white]">{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" color="white" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title} style={{ backgroundColor: location.pathname === subItem.url ? '#3757F7' : '' }}>
                      <SidebarMenuSubButton asChild>
                        <p onClick={() => navigate(subItem.url)} className="cursor-pointer">
                          <span className="text-white">{subItem.title}</span>
                        </p>
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
