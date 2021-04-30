import { Word, PartOfSpeech } from '../types.ts';
import { randomGetItem } from './common.ts';

/**
 * 随机获取一个词
 */
function getRandomOneFromWords(allWords: Word[], options: {
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
  const word = randomGetItem(filtered)

  return word.text;
}

/** 根据词性获取词 */
function getWordsByPartOfSpeech(allWords: Word[], pos: PartOfSpeech[], fullData = false): Word[] {
  return allWords.filter(word => word.partOfSpeech.some(p => pos.includes(p)))
}

export { getRandomOneFromWords, getWordsByPartOfSpeech }
