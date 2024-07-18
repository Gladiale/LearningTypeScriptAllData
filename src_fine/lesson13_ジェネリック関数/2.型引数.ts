export {};

// -------------- 型引数が複数の場合 --------------
const chara = <S, T>(el1: S, el2: T): [S, T] => {
  return [el1, el2];
};
console.log(chara<string, number>("ルフィ", 19));

// -------------- extendsの場合(制約をつける) --------------
// 下記コードの制約はTの型は{name: string}の部分型である必要になります
const copyWithExtends = <T extends { name: string }>(element: T): T[] => {
  const result: T[] = [];
  result.push(element);
  result.push(element);
  return result;
};

type NameAndBounty = {
  name: string;
  bounty: number;
};

console.log(
  copyWithExtends<NameAndBounty>({ name: "チョッパー", bounty: 1000 })
);

// -------------- 呼び出しで型引数は省略できる --------------
const copy = <T>(element: T): T[] => {
  const result: T[] = [];
  result.push(element);
  result.push(element);
  return result;
};

console.log(copy<string>("ナミ"));
// 省略可 (型推論)
console.log(copy("ナミ"));
console.log(copy(73));
