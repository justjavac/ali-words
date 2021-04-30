function randomGetItem<T>(collection: T[]): T {
  const index = Math.floor(Math.random() * collection.length)
  return collection[index];
}

export {
  randomGetItem,
};
