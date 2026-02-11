import { curriculum } from "./src/config/curriculum";
import { docContent } from "./src/content/index";

console.log("开始路由与内容完整性检查...");

let totalLinks = 0;
let missingContent = 0;

curriculum.forEach(module => {
  console.log(`\n检查模块: ${module.title}`);
  module.items.forEach(item => {
    totalLinks++;
    const url = item.url;
    // Route format in App.tsx is /module-:module/:lesson
    // Content key in docContent is /module-X/lesson-Y
    
    // Check if content exists
    if (!docContent[url]) {
      console.error(`[FAIL] 链接 ${url} (${item.title}) 没有对应的文档内容！`);
      missingContent++;
    } else {
      console.log(`[PASS] ${url} - 内容长度: ${docContent[url].length} 字符`);
    }
  });
});

console.log(`\n检查完成。总链接数: ${totalLinks}`);
if (missingContent > 0) {
  console.error(`发现 ${missingContent} 个断链或缺失内容。请修复！`);
  process.exit(1);
} else {
  console.log("所有链接均有对应内容。测试通过！");
}
