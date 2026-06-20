# 内容填充指南（给协作者）

这是 **statlib** 项目主页（https://statlib-site.vercel.app）。
样式和结构已经做好，**你只需要填内容**——改两个数据文件即可，不用碰任何样式/组件代码。

改完提交后，网站会在 **1–2 分钟内自动更新上线**（无需手动部署）。

---

## 你只需要改这两个文件

| 文件 | 管什么 |
|---|---|
| `src/data/site.ts` | 站点名、首页大标题（tagline）、简介、GitHub 链接、首页三个数字 |
| `src/data/theorems.ts` | 定理目录（Library 页的全部内容） |

**其它文件都不要动**（`src/pages/`、`src/components/`、`src/layouts/`、`*.css` 都是样式和结构）。

---

## 两种编辑方式，任选

### 方式 A：直接在 GitHub 网页改（最简单，零安装，推荐）

适合不想装环境的人。

1. 打开仓库：https://github.com/statopia/statlib-site
2. 进入要改的文件，例如 `src/data/theorems.ts`
3. 点右上角的 **铅笔图标 ✏️ (Edit this file)**
4. 直接在网页里改文字
5. 拉到底，点 **Commit changes**（提交说明随便写，如 "update theorems"）
6. 等 1–2 分钟，刷新 https://statlib-site.vercel.app 就能看到更新

> 缺点：网页里改完不能本地预览，提交后才能在线上看效果。改小内容很方便。

### 方式 B：本地克隆 + 实时预览（适合改大量内容）

需要装 Node.js（https://nodejs.org，选 LTS 版）。

```bash
git clone https://github.com/statopia/statlib-site.git
cd statlib-site
npm install
npm run dev          # 打开 http://localhost:4321 ，改文件保存即实时刷新
```

改完后提交：

```bash
git add -A
git commit -m "update content"
git push             # push 后线上自动更新
```

---

## `src/data/site.ts` 字段说明

```ts
export const site = {
  name: "statlib",                    // 站点短名（导航栏、页脚）
  org: "statopia",                    // 组织名
  tagline: "……",                      // 首页大标题，一句话定位
  description: "……",                  // 首页 Abstract 段落
  githubUrl: "https://github.com/…",  // "View on GitHub" 按钮指向的地址
  githubSiteUrl: "https://github.com/statopia/statlib-site",
};

export const stats = [               // 首页三个大数字
  { label: "Formalized theorems", value: "120+" },
  { label: "Topic areas",         value: "8" },
  { label: "Machine-checked",     value: "100%" },
];
```

改 `value` 和 `label` 即可。想加/减数字就增删数组里的 `{ … }` 项。

---

## `src/data/theorems.ts` 字段说明（重点）

整个目录是一个 `topics` 数组，每个**主题**下有若干**定理**：

```ts
export const topics = [
  {
    id: "probability",                          // 锚点用的英文短标识（小写，无空格）
    title: "Probability foundations",           // 主题显示名
    summary: "这一主题的一句话介绍",
    theorems: [
      {
        name: "Markov's inequality",            // 定理名（显示用）
        lean: "Statlib.Prob.markov",            // Lean 声明名（可留空 ""）
        latex: "\\mathbb{P}(X \\ge a) \\le \\frac{\\mathbb{E}[X]}{a}",  // 公式，见下
        blurb: "一句话说明这个定理在讲什么",
        status: "proved",                        // proved | wip | planned
      },
      // …更多定理
    ],
  },
  // …更多主题
];
```

### `status` 取值（决定右侧小圆点颜色）

| 值 | 含义 | 显示 |
|---|---|---|
| `"proved"` | 已完整机器验证 | 绿点 · proved |
| `"wip"` | 已形式化、证明进行中 | 黄点 · in progress |
| `"planned"` | 在路线图上、尚未开始 | 灰点 · planned |

### `latex` 怎么写（KaTeX 语法，重要）

- 公式用 **KaTeX/LaTeX** 语法，会自动渲染成数学公式。
- ⚠️ **反斜杠要写两个**：因为这是 JS 字符串，LaTeX 里的 `\frac` 在这里要写成 `\\frac`、`\ge` 写成 `\\ge`、`\mathbb` 写成 `\\mathbb`。
- 例：数学上的 `P(X ≥ a) ≤ E[X]/a` 写成
  `"\\mathbb{P}(X \\ge a) \\le \\frac{\\mathbb{E}[X]}{a}"`
- 不确定符号写法时，可在 https://katex.org/#demo 里试，把能渲染的表达式复制过来，再把每个 `\` 改成 `\\`。
- 没有公式的条目可以省略 `latex` 这一行（或写 `latex: ""`）。

### 增删内容

- **加一个定理**：在某个主题的 `theorems: [ … ]` 里复制一个 `{ … }` 块，改字段。
- **加一个主题**：在 `topics = [ … ]` 里复制一个 `{ id, title, summary, theorems }` 块。
- 注意每个 `{ … }` 之间要有**逗号**，字符串要用**英文双引号** `"`，别用中文引号。

---

## 知识图谱页 `/graph` 怎么更新（进阶，通常给维护者）

`/graph` 页展示 statlib 的**证明依赖图**（proof narratives）。它由两部分组成：

| 部分 | 位置 | 说明 |
|---|---|---|
| 整套图谱产物 | `public/narratives/` | 主索引 `index.html` + 各主题的 `.svg` 依赖图 + `.md` 叙述。**整包可替换**。 |
| 页面门面配置 | `src/data/graph.ts` | 顶部统计数字、入口链接、"精选大型证明"列表 |

页面本身（`src/pages/graph.astro`）和导航不用动——这是"预留槽位"的设计。

**更新图谱内容（三步）：**

1. 在 prover 仓库重新生成图谱产物（`core/kb/theme/narratives`）。
2. 用新产物**整包替换**本仓库的 `public/narratives/` 文件夹（删旧的，拷新的进去）。
3. 改 `src/data/graph.ts` 里的数字（`graphStats`）和精选列表（`featured`，每项的 `svg` 路径相对 `public/narratives/`）。

提交后同样 1–2 分钟自动上线。

> 只想改首页统计数字或精选哪几张图、不动产物 → 只改 `src/data/graph.ts` 即可。

> 注：图里每个节点的链接是 `vscode://` 本地编辑器链接（对维护者有用，访客点了无效），属正常现象。

---

## 改完怎么确认生效

1. 提交（网页 Commit 或本地 `git push`）。
2. 等 1–2 分钟（Vercel 自动构建）。
3. 打开 https://statlib-site.vercel.app 刷新查看。
4. 想看构建有没有成功，可问仓库管理员要 Vercel 项目链接，或直接看线上结果。

> 如果改完线上 1–2 分钟还没变，多半是 `theorems.ts` 里语法错了（少了逗号/引号、`\` 没写成 `\\`），导致构建失败。把改动回退或贴出来找管理员看。

---

## 数据来源参考（可选）

statlib 库里已有结构化目录 `theme/catalogue/<topic>.yaml`，字段与本站几乎一一对应
（`title` / `lean_name` / `latex_statement` / `status`）。批量填内容时可参考它，
或将来写脚本把这些 yaml 自动转成 `theorems.ts`。

---

## 注意事项小结

- ✅ 日常内容只改 `src/data/site.ts` 和 `src/data/theorems.ts`
- ✅ 知识图谱：替换 `public/narratives/` + 改 `src/data/graph.ts`（见上方进阶小节）
- ✅ `latex` 里反斜杠写两个 `\\`
- ✅ 字符串用英文双引号，条目间加逗号
- ❌ 不要改 `src/pages` / `src/components` / `src/layouts` / `*.css`
- ❌ 不要删 `package.json` / `astro.config.mjs` 等配置文件
