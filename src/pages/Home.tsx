import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Terminal, Github, Cpu, Users, Database, Zap } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import heroImg from "@/assets/hero.jpeg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navbar */}
      <header className="px-6 h-16 flex items-center justify-between border-b bg-background/80 backdrop-blur sticky top-0 z-50">
        <div className="flex items-center gap-2 font-heading font-bold text-xl text-primary">
          <Terminal className="w-6 h-6" />
          <span>CC for PMs (CN)</span>
        </div>
        <nav className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/module-0/introduction" className="text-sm font-medium hover:text-primary transition-colors">开始学习</Link>
          <a href="https://github.com/jssyxd/ccforpm-course-cn" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                完全免费的交互式教程
              </div>
              
              <h1 className="text-5xl md:text-6xl font-heading font-bold tracking-tight leading-tight">
                在 <span className="text-primary">Claude Code</span> 中<br/>学习 Claude Code
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                这是专为产品经理设计的实战课程。没有视频，没有枯燥的文档，直接在 Claude Code 的终端环境中通过实际操作来学习 AI 驱动的产品管理。
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/module-0/introduction">
                  <Button size="lg" className="h-12 px-8 text-lg rounded-full shadow-lg shadow-primary/20">
                    开始课程 <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <a href="https://github.com/jssyxd/ccforpm-course-cn" target="_blank" rel="noreferrer">
                  <Button variant="outline" size="lg" className="h-12 px-8 text-lg rounded-full">
                    <Github className="mr-2 w-4 h-4" /> 源码仓库
                  </Button>
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-500 opacity-20 blur-3xl rounded-full"></div>
              <img 
                src={heroImg} 
                alt="Claude Code Terminal Interface" 
                className="relative rounded-2xl shadow-2xl border border-border/50 w-full object-cover aspect-video hover:scale-[1.01] transition-transform duration-500"
              />
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-muted/50 border-y border-border/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-heading font-bold mb-4">你将学到什么？</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                掌握 Claude Code 的核心能力，并将其应用于真实的 PM 工作流中。
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard 
                icon={<Terminal className="w-8 h-8 text-primary" />}
                title="文件操作"
                desc="直接从终端读取、编写和编辑 PRD 及数据文件。"
              />
              <FeatureCard 
                icon={<Zap className="w-8 h-8 text-primary" />}
                title="并行 Agents"
                desc="同时启动 10 个 Claude 实例来处理多个任务。"
              />
              <FeatureCard 
                icon={<Users className="w-8 h-8 text-primary" />}
                title="自定义子 Agents"
                desc="创建专属的工程师、高管或 UX 研究员角色。"
              />
              <FeatureCard 
                icon={<Database className="w-8 h-8 text-primary" />}
                title="项目记忆"
                desc="使用 CLAUDE.md 维护项目的持久化上下文。"
              />
            </div>
          </div>
        </section>

        {/* Curriculum Preview */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-12 text-center">课程大纲</h2>
            <div className="space-y-6">
              <CurriculumItem 
                number="0" 
                title="起步" 
                desc="安装 Claude Code 并克隆课程仓库。这是你与真正执行任务的 AI 的第一次对话。" 
              />
              <CurriculumItem 
                number="1" 
                title="基础" 
                desc="通过 TaskFlow 项目实战，掌握文件操作、Agents、子 Agents 和项目记忆。" 
              />
              <CurriculumItem 
                number="2" 
                title="进阶 PM 工作" 
                desc="运用所学知识撰写 PRD，分析产品数据，制定竞争策略。" 
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t bg-muted/30 text-center text-muted-foreground text-sm">
        <p>© 2026 Claude Code PM Course (CN). 基于 Carl Vellotti 的开源课程制作。</p>
        <p className="mt-2">本中文版由 AI Agent 生成并维护。</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4 bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 font-heading">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function CurriculumItem({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="flex gap-6 p-6 rounded-xl border bg-card hover:border-primary/50 transition-colors group">
      <div className="font-mono text-4xl font-bold text-muted-foreground/30 group-hover:text-primary transition-colors">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 font-heading">Module {number}: {title}</h3>
        <p className="text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}
