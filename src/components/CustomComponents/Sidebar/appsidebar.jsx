


import {
  AudioWaveform,
  Command,
  FileText,
  Frame,
  GalleryVerticalEnd,
  LayoutDashboard,
  Map,
  PieChart,
  Settings2,
  UserCog,
  View,
} from "lucide-react";

import { NavMain } from "./navMain";

import { TeamSwitcher } from "./teamSwitcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavUser } from "./navUser";


const data = {
  user: {
    name: "uma",
    email: "uma@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Main Dashboard",
          url: "/dashboard",
        },
        {
          title: "ActiveCalls Map",
          url: "#",
        },
        {
          title: "Blocked Calls",
          url: "#",
        },
        {
          title: "Call Statistics",
          url: "#",
        },
        {
          title: "Financial",
          url: "#",
        },
        {
          title: "Fraud Activity",
          url: "#",
        },
        {
          title: "Fraud Alerts",
          url: "#",
        },
        {
          title: "RoboCalls",
          url: "#",
        },
        {
          title: "Security",
          url: "#",
        },
        {
          title: "Stir/Shaken",
          url: "#",
        },
      ],
    },
    {
      title: "Visibility",
      url: "#",
      icon: View,
      isActive: false,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Configuration",
      url: "#",
      icon: Settings2,
      isActive: false,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Report",
      url: "#",
      icon: FileText,
      isActive: false,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Administration",
      url: "#",
      icon: UserCog,
      isActive: false,
      items: [
        {
          title: "Manage Users",
          url: "/manageusers",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar(props) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher/>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
      <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
