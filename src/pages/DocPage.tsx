import { useParams } from "wouter";
import DocsLayout from "@/layouts/DocsLayout";
import { docContent } from "@/content";
import { Streamdown } from "streamdown";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { curriculum } from "@/config/curriculum";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function DocPage() {
  const params = useParams();
  const moduleName = params.module; // e.g. "module-0"
  const lessonName = params.lesson; // e.g. "introduction"
  
  const contentKey = `/${moduleName}/${lessonName}`;
  const markdown = docContent[contentKey] || "# 404: 页面未找到\n\n该章节内容正在编写中...";

  // Find prev/next links
  const flatItems = curriculum.flatMap(g => g.items);
  const currentIndex = flatItems.findIndex(i => i.url === contentKey);
  const prevItem = currentIndex > 0 ? flatItems[currentIndex - 1] : null;
  const nextItem = currentIndex < flatItems.length - 1 ? flatItems[currentIndex + 1] : null;

  return (
    <DocsLayout>
      <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-heading prose-code:font-mono prose-pre:bg-muted/50 prose-pre:border prose-img:rounded-xl prose-img:border">
        <Streamdown>{markdown}</Streamdown>
      </div>
      
      <div className="flex justify-between items-center mt-16 pt-8 border-t">
        {prevItem ? (
          <Link href={prevItem.url}>
            <Button variant="ghost" className="h-auto py-4 px-6 flex flex-col items-start gap-1">
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <ChevronLeft className="w-3 h-3" /> 上一节
              </span>
              <span className="font-medium text-base">{prevItem.title}</span>
            </Button>
          </Link>
        ) : <div />}

        {nextItem ? (
          <Link href={nextItem.url}>
            <Button variant="ghost" className="h-auto py-4 px-6 flex flex-col items-end gap-1">
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                下一节 <ChevronRight className="w-3 h-3" />
              </span>
              <span className="font-medium text-base">{nextItem.title}</span>
            </Button>
          </Link>
        ) : <div />}
      </div>
    </DocsLayout>
  );
}
