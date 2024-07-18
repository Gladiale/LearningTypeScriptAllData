export {};

// ブロックスコープ (ブロックの範囲に対して発生)
// {...}の形
function chopper_bounty(episode: number) {
  const berry = 50;
  if (800 < episode && episode <= 1057) {
    const new_berry = berry + 50;
    return new_berry;
  }
  if (1057 < episode) {
    const new_berry = berry + 950;
    return new_berry;
  }
  return berry;
}

console.log(chopper_bounty(1200));
