import {
  randomGetWord,
  randomMarketingSentence,
  randomQZoneSentence,
} from "./src/mod.ts";

// console.info('verbs:', getVerbs());
// console.info('nouns:', getNouns());
console.info("random one:", randomGetWord());

const qzoneSentence = randomQZoneSentence();
console.info(qzoneSentence);

const marketingSentence = randomMarketingSentence();
console.info(marketingSentence);
