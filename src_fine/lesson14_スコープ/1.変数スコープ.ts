export {};

// 変数スコープ (変数の有効範囲)
// その変数が属するスコープ内でしか使用できない
type Character = <S>(el: S) => void;

// 例1:
const chopper: Character = (el) => {
  const result = [];
  result.push(el);
  return result;
};

// ！resultは関数chopperの中しか使えない
// console.log(result);

// 例2:
const bounty: number = 50;
const chopper2: Character = (el) => {
  const bounty: number = 100;
  const result = [];
  result.push(el);
  result.push(bounty);
  console.log(result);
};

// 内側のスコープが優先される
chopper2<string>("懸賞金"); // [ '懸賞金', 100 ]
console.log(bounty); // 50
