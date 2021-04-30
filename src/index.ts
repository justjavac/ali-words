import { PartOfSpeech } from './types.ts';
import { getAllWords } from './words.ts';
import { getRandomOneFromWords, getWordsByPartOfSpeech } from './utils/word.ts';
import { randomGetItem } from './utils/common.ts';
import { generateSentence } from './utils/template.ts';
import qZoneTpls from './templates/qzone.ts';

function randomGetWord(options: {
  length?: number;
  partOfSpeech?: PartOfSpeech[] | PartOfSpeech;
} = {}) {
  return getRandomOneFromWords(getAllWords(), options)
}

const { n, vt, vi, adj } = PartOfSpeech
const getAdjs = () => getWordsByPartOfSpeech(getAllWords(), [adj]).map(word => word.text)
const getNouns = () => getWordsByPartOfSpeech(getAllWords(), [n]).map(word => word.text)
const getVerbs = () => getWordsByPartOfSpeech(getAllWords(), [vi, vt]).map(word => word.text)

function randomQZoneSentense() {
  const tpl = randomGetItem(qZoneTpls)
  return generateSentence(tpl)
}

// TODO 接狗屁不通生成器

export { randomGetWord,getAllWords, getVerbs, getNouns, getAdjs, randomQZoneSentense }
