export {};

// 部分型(返り値の型によるもの)

// SがTの部分型
// 「S型の値を返す関数」は「T型の値を返す関数」の代わりになる

type Character = {
  name: string;
};

// WantedCharacterはCharacterの部分型
type WantedCharacter = {
  name: string;
  bounty: number;
};

// (bounty: number) => WantedCharacter は (bounty: number) => Characterの部分型

// オブジェクトを返す関数chopper     //返り値
const chopper = (bounty: number): WantedCharacter => ({
  name: "チョッパー",
  bounty,
});
// console.log(chopper(1000));

// 関数chopperの代りに別の関数を使用
// 「(bounty: number) => Character型」の変数characterに「(bounty: number) => WantedCharacter型」のchopperを代入
const character: (bounty: number) => Character = chopper;
console.log(character(1000));
