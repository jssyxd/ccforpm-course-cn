export const docContent: Record<string, string> = {
  "/module-0/introduction": `
# 0.0: 简介

## Claude Code 产品经理课程

这是唯一直接在 **Claude Code** 内部教授的课程！

这门免费课程通过实际操作教你 AI 驱动的产品管理——没有视频，没有枯燥的文档，只有在 Claude Code 内部进行的真实 PM 工作。

### 你将如何学习
*   你将安装它，克隆本仓库，然后输入 \`/start-1-1\` 开始
*   Claude 会通过交互式的方式引导你完成每个模块
*   你将通过处理真实文件来“边做边学”

### 课程适合谁？
**产品经理**，那些希望掌握使用 LLM 进行工作的最强大方式的人。

Claude Code 不是一个聊天机器人。它是一个直接与你的文件和计算机协作的 AI：
*   阅读你的用户研究，编辑 PRD，分析数据
*   并行运行 10 个实例来同时处理 10 个文件
*   在每次会话中记住关于你产品的上下文
*   分析你粘贴的截图和模型
*   在你与团队分享工作之前，充当自定义 AI 审核员（工程师、高管、UX）

这是集成到你实际工作流中的 AI，而不是作为一个聊天窗口附加在外面。

**你不需要编码或终端经验。** 如果你能用简单的中文描述你想要什么，你就可以使用 Claude Code。
`,

  "/module-0/installation": `
# 0.1: 安装指南

只需 15 分钟即可完成 Claude Code 的安装。

## 前置要求
1.  **Claude Pro 或 Team 账号**：你需要一个有效的订阅。
2.  **终端访问权限**：Mac (Terminal/iTerm), Windows (PowerShell/WSL), 或 Linux。

## 安装步骤

### 1. 安装 Node.js
Claude Code 需要 Node.js 环境。
[下载并安装 Node.js (LTS 版本)](https://nodejs.org/)

### 2. 全局安装 Claude Code
打开你的终端，运行以下命令：

\`\`\`bash
npm install -g @anthropic-ai/claude-code
\`\`\`

### 3. 进行认证
运行以下命令并按照浏览器提示完成登录：

\`\`\`bash
claude login
\`\`\`

完成！你现在可以开始使用 Claude Code 了。
`,

  "/module-0/start-and-clone": `
# 0.2: 启动与克隆

现在你已经安装了 Claude Code，让我们开始课程吧。

## 步骤 1: 下载课程资料
你需要下载包含所有练习文件的课程仓库。

[👉 点击下载课程资料 (.zip)](https://github.com/carlvellotti/claude-code-pm-course/releases/latest/download/complete-course.zip)

下载后，解压该文件到你喜欢的目录。

## 步骤 2: 在 Claude Code 中打开
1.  打开你的终端。
2.  使用 \`cd\` 命令进入解压后的文件夹：
    \`\`\`bash
    cd path/to/claude-code-pm-course
    \`\`\`
3.  启动 Claude Code：
    \`\`\`bash
    claude
    \`\`\`

## 步骤 3: 开始第一课
在 Claude Code 的提示符中，输入以下命令：

\`\`\`text
/start-1-1
\`\`\`

Claude 将会加载第一课的教学脚本，并在终端中直接指导你。祝你好运！
`,

  "/module-1/welcome": `
# 1.1: 欢迎来到 TaskFlow

欢迎来到 **Module 1: 基础**。

在本模块中，你将掌握 Claude Code 的核心操作。我们将通过一家名为 **TaskFlow** 的虚构公司的项目来进行实战练习。

## 你将学到
*   **文件可视化**：如何设置你的工作区以便观察 Claude 的工作。
*   **基础任务**：处理会议纪要，分析用户研究。
*   **Agents**：并行运行多个任务。
*   **项目记忆**：使用 CLAUDE.md 建立持久化上下文。

请确保你已经在终端中运行了 \`/start-1-1\` 来开始交互式学习。
`,

  "/module-1/visualizing-files": `
# 1.2: 文件可视化

Claude Code 的魔力在于它可以直接操作文件。为了获得最佳体验，你需要“看见”它在做什么。

## 设置分屏
我们推荐设置分屏工作区：
*   **左侧**：你的终端（运行 Claude Code）
*   **右侧**：你的文件编辑器（VS Code, Obsidian, 或任何 Markdown 编辑器）

当你命令 Claude 创建或编辑文件时，你应该能在右侧的编辑器中实时看到变化。

## 练习
在终端中，Claude 会引导你创建一个名为 \`hello_world.md\` 的文件。观察它如何在你的编辑器中出现。
`,
  
  "/module-1/first-tasks": "# 1.3: 初次任务\n\n本节内容包含在交互式课程中。请在终端运行 `/start-1-3`。",
  "/module-1/agents": "# 1.4: Agents (智能体)\n\n本节内容包含在交互式课程中。请在终端运行 `/start-1-4`。",
  "/module-1/custom-subagents": "# 1.5: 自定义子智能体\n\n本节内容包含在交互式课程中。请在终端运行 `/start-1-5`。",
  "/module-1/project-memory": "# 1.6: 项目记忆 (Memory)\n\n本节内容包含在交互式课程中。请在终端运行 `/start-1-6`。",
  "/module-1/claude-code-navigation": "# 1.7: Claude Code 导航\n\n本节内容包含在交互式课程中。请在终端运行 `/start-1-7`。",
  
  "/module-2/write-prd": "# 2.1: 撰写 PRD\n\n本节内容包含在交互式课程中。请在终端运行 `/start-2-1`。",
  "/module-2/analyze-data": "# 2.2: 数据分析\n\n本节内容包含在交互式课程中。请在终端运行 `/start-2-2`。",
  "/module-2/product-strategy": "# 2.3: 产品策略\n\n本节内容包含在交互式课程中。请在终端运行 `/start-2-3`。",
  
  "/module-3/setup": `
# 3.0: Nano Banana 设置

**Nano Banana** 是我们在 Claude Code 内部构建的视觉设计系统。

## 什么是 Nano Banana？
它是你不仅是一个 PM，还是一个创意总监的证明。
通过 Nano Banana，你将学习如何引导 AI 生成一致、高质量的产品视觉图、架构图和营销素材。

## 准备工作
请确保你已经安装了最新的 Claude Code，并且你的项目记忆（CLAUDE.md）已经更新。
`,
  "/module-3/welcome-first-generation": `
# 3.1.1: 欢迎 & 首次生成

欢迎来到视觉生成的世界。

## 你的第一个任务
我们将从生成一个简单的 Logo 开始。
在终端中输入：
\`\`\`text
/generate logo for TaskFlow
\`\`\`

Claude 会分析你的项目上下文，并为你提供几个设计方案。
`,
  "/module-3/understanding-basics": "# 3.1.2: 理解基础\n\n掌握提示词工程的基础。",
  "/module-3/consistency-style": "# 3.1.3: 一致性与风格\n\n如何保持视觉风格的一致性。",
  "/module-3/style-database": "# 3.1.4: 构建风格库\n\n建立可复用的设计资产库。",
  "/module-3/users-product-visuals": "# 3.2.1: 用户与产品视觉\n\n生成用户画像和产品概念图。",
  "/module-3/strategy-architecture-visuals": "# 3.2.2: 策略与架构视觉\n\n可视化复杂的产品架构。",
  "/module-3/marketing-launch-assets": "# 3.2.3: 营销与发布资产\n\n创建用于发布的产品图和营销素材。",

  "/module-4/overview": "# Vibe Coding 概览\n\n学习如何通过 'Vibe' 来编写代码。",
  "/module-4/setup": "# 4.1: 设置\n\n准备你的开发环境。",
  "/module-4/plan": "# 4.2: 计划\n\n规划你的应用结构。",
  "/module-4/build-iterate": "# 4.3: 构建与迭代\n\n使用 Claude Code 进行循环开发。",
  "/module-4/github": "# 4.4: GitHub 集成\n\n管理版本控制。",
  "/module-4/go-live": "# 4.5: 上线发布\n\n将你的应用部署到世界。"
};
