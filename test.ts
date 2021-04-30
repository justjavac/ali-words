import { randomGetWord, randomQZoneSentence, randomMarketingSentence } from './src/mod.ts';

console.info('random one:', randomGetWord());

const qzoneSentence = randomQZoneSentence()
console.info(qzoneSentence);

const marketingSentence = randomMarketingSentence()
console.info(marketingSentence);
