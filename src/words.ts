/** 词性 */
enum PartOfSpeech {
  /** 名词 */
  n,
  /** 及物动词 */
  vt,
  /** 不及物动词 */
  vi,
  /** 形容词 */
  adj,
}

const { n, vt, vi, adj } = PartOfSpeech

interface Word {
  text: string,
  partOfSpeech: PartOfSpeech[],
}

function generateWordItem(text: string, partOfSpeech: PartOfSpeech[]): Word {
  return {
    text,
    partOfSpeech,
  }
}

type WordItem = [string, PartOfSpeech[]]

const allWords = ([
  ['赋能', [n, vi, vt]],
  ['抓手', [n]],
  ['中台', [n]],
  ['闭环', [n]],
  ['落地', [vi]],
  ['漏斗', [n]],
  ['沉淀', [vi]],
  ['给到', [vt]],
  ['平台', [n]],
  ['响应', [n, vi, vt]],
  ['同步', [n, vi, vt]],
  ['对齐', [vi, vt]],
] as WordItem[])
  .map(([text, partOfSpeech]) => generateWordItem(text, partOfSpeech));


function getWordsByPartOfSpeech(pos: PartOfSpeech[]): string[] {
  return allWords
    .filter(word => word.partOfSpeech.some(p => pos.includes(p)))
    .map(word => word.text)
}

/**
 * 随机获取一个词
 */
function getRandomOne(options: {
  length?: number;
  partOfSpeech?: PartOfSpeech[] | PartOfSpeech;
} = {}): string {

  let { length, partOfSpeech } = options;
  let pos: PartOfSpeech[] = []
  if (partOfSpeech) {
    pos = (Array.isArray(partOfSpeech)) ? partOfSpeech : [partOfSpeech]
  }

  let filtered = allWords.filter(word => {
    if (length && word.text.length !== length) return false;
    if (pos.length && word.partOfSpeech.every(itemPos => !pos.includes(itemPos))) return false
    return true
  })

  if (!filtered.length) filtered = allWords

  const index = Math.floor(Math.random() * filtered.length)
  return filtered[index].text;
}

const adjs = getWordsByPartOfSpeech([adj])
const nouns = getWordsByPartOfSpeech([n])
const verbs = getWordsByPartOfSpeech([vi, vt])

export { allWords, verbs, nouns, adjs, getRandomOne }
