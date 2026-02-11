import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  const [location] = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background text-foreground text-center">
      <FileQuestion className="w-24 h-24 text-muted-foreground mb-6" />
      <h1 className="text-4xl font-heading font-bold mb-2">404</h1>
      <h2 className="text-xl text-muted-foreground mb-4">页面未找到</h2>
      <p className="text-sm text-muted-foreground mb-8 bg-muted px-4 py-2 rounded-md font-mono">
        Current Path: {location}
      </p>
      <Link href="/">
        <Button size="lg">返回首页</Button>
      </Link>
    </div>
  );
}
