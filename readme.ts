import words from "./mod.ts";

const readme = `# 互联网黑话词汇表

互联网黑话词汇表，包含“赋能、抓手、闭环、沉淀、打通”等阿里味儿词汇。

## 概述

本文词汇收集自网络，如果有遗漏，请修改 [mod.ts](./mod.ts) 文件，然后运行以下命令：

\`\`\`bash
$ deno run --allow-write .\\readme.ts
\`\`\`

如果你没有安装 Deno，需要先[安装 Deno](https://x.deno.js.cn) 才能运行。

## 二字词汇

${words.filter((x) => x.length === 2).join(", ")}

## 三字词汇

${words.filter((x) => x.length === 3).join(", ")}

## 四字词汇

${words.filter((x) => x.length === 4).join(", ")}

## 五字词汇

${words.filter((x) => x.length === 5).join(", ")}

## 六字词汇

${words.filter((x) => x.length === 6).join(", ")}
`;

await Deno.writeTextFile("./README.md", readme);
