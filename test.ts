import { randomGetWord, getNouns, getVerbs, randomQZoneSentense } from './src/mod.ts';

// console.info('verbs:', getVerbs());
// console.info('nouns:', getNouns());
console.info('random one:', randomGetWord());

const qzoneSentence = randomQZoneSentense()
console.info(qzoneSentence);
