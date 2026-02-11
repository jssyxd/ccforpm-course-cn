# Claude Code 产品经理课程 (中文版)

这是一个基于 [ccforpms.com](https://ccforpms.com/) 的中文复刻项目。
本项目使用 React + Vite + Tailwind CSS 构建，旨在提供与原站一致的学习体验，但内容已完全中文化。

## 项目结构
- `src/pages`: 页面组件
- `src/content`: 课程内容 (Markdown 格式)
- `src/config`: 课程大纲配置
- `dist`: 构建后的静态文件

## 部署指南

### 1. GitHub 部署
本项目已经配置好 GitHub 仓库。
推送代码后，你的代码将托管在 GitHub 上。

### 2. Vercel 部署 (推荐)
1. 登录 [Vercel](https://vercel.com)。
2. 点击 "Add New..." -> "Project"。
3. 选择 `ccforpm-course-cn` 仓库。
4. Framework Preset 选择 "Vite"。
5. Build Command: `npm run build` (默认)
6. Output Directory: `dist` (默认)
7. 点击 "Deploy"。

### 3. 域名配置
在 Vercel 项目设置中，你可以将域名修改为 `ccforpmcn.vercel.app`。

## 本地开发
```bash
pnpm install
pnpm run dev
```

## 版权说明
原课程内容归 Carl Vellotti 所有。本项目仅供学习交流使用。
