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

interface Word {
  text: string,
  partOfSpeech: PartOfSpeech[],
  length?: number,
}

export { PartOfSpeech }
export type { Word }
