import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AppSidebar } from "@/components/AppSidebar";
import { Separator } from "@/components/ui/separator";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { useLocation, Link } from "wouter";
import { curriculum } from "@/config/curriculum";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  const [location] = useLocation();

  // Find current page title for breadcrumb
  let currentGroupTitle = "";
  let currentPageTitle = "";

  for (const group of curriculum) {
    const item = group.items.find(i => i.url === location);
    if (item) {
      currentGroupTitle = group.title;
      currentPageTitle = item.title;
      break;
    }
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 flex flex-col min-w-0 bg-background transition-[width,height] ease-linear duration-200">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 sticky top-0 bg-background/95 backdrop-blur z-10">
          <SidebarTrigger className="-ml-1" />
          <ThemeToggle />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/">首页</BreadcrumbLink>
              </BreadcrumbItem>
              {currentGroupTitle && (
                <>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbPage className="text-muted-foreground">{currentGroupTitle.split(':')[0]}</BreadcrumbPage>
                  </BreadcrumbItem>
                </>
              )}
              {currentPageTitle && (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{currentPageTitle}</BreadcrumbPage>
                  </BreadcrumbItem>
                </>
              )}
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex-1 p-6 md:p-10 max-w-4xl mx-auto w-full">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
