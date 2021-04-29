// deno run --allow-write .\readme.ts
import words from "./mod.ts";

const readme = `# 互联网黑话词汇表

互联网黑话词汇表，包含“赋能、抓手、闭环、沉淀、打通”等阿里味儿词汇。

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
