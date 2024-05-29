export function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    // pick array[j] from array[0..i]
    const j = rng.next().value! % (i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function* randomNumberGenerator() {
  for (;;) {
    let randomNumbers = new Uint32Array(100);
    crypto.getRandomValues(randomNumbers);
    for (let r of randomNumbers) {
      yield r;
    }
  }
}
export const rng = randomNumberGenerator();
