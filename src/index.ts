import { PartOfSpeech } from "./types.ts";
import { getAllWords } from "./words.ts";
import { getRandomOneFromWords, getWordsByPartOfSpeech } from "./utils/word.ts";
import { randomGetItem } from "./utils/common.ts";
import { generateSentence } from "./utils/template.ts";
import qZoneTpls from "./templates/qzone.ts";
import marketingTpls from "./templates/marketing.ts";

function randomGetWord(options: {
  length?: number;
  partOfSpeech?: PartOfSpeech[] | PartOfSpeech;
} = {}) {
  return getRandomOneFromWords(getAllWords(), options);
}

const { n, vt, vi, adj } = PartOfSpeech;
const getAdjs = () =>
  getWordsByPartOfSpeech(getAllWords(), [adj]).map((word) => word.text);
const getNouns = () =>
  getWordsByPartOfSpeech(getAllWords(), [n]).map((word) => word.text);
const getVerbs = () =>
  getWordsByPartOfSpeech(getAllWords(), [vi, vt]).map((word) => word.text);

function getSentenceMaker(templates: string[]) {
  return () => generateSentence(randomGetItem(templates));
}

const randomQZoneSentence = getSentenceMaker(qZoneTpls);
const randomMarketingSentence = getSentenceMaker(marketingTpls);

type TemplateType = "qzone" | "marketing";

function randomSentence(type: TemplateType) {
  let templates = qZoneTpls;
  if (type === "marketing") templates = marketingTpls;
  return generateSentence(randomGetItem(templates));
}

// TODO 接狗屁不通生成器

export {
  getAdjs,
  getAllWords,
  getNouns,
  getVerbs,
  randomGetWord,
  randomMarketingSentence,
  randomQZoneSentence,
  randomSentence,
};
