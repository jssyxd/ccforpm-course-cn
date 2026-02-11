import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { curriculum } from "@/config/curriculum";
import { Link, useLocation } from "wouter";
import { Terminal } from "lucide-react";

export function AppSidebar() {
  const [location] = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <Link href="/" className="flex items-center gap-2 font-heading font-bold text-xl text-primary hover:opacity-80 transition-opacity">
          <Terminal className="w-6 h-6" />
          <span>CC for PMs</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {curriculum.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel className="font-heading text-foreground/70">{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton 
                      asChild 
                      isActive={location === item.url}
                      className="data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[active=true]:font-medium transition-colors"
                    >
                      <Link href={item.url}>
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
