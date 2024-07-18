export {};

// 部分型(引数の型によるもの)

// SがTの部分型
// 「S型を引数に受け取る関数」は「T型を引数に受け取る関数」の代わりになる
type Character = {
  name: string;
};

// WantedCharacterはCharacterの部分型
type WantedCharacter = {
  name: string;
  bounty: number;
};

const getName = (obj: Character) => console.log(obj.name);

// (obj: WantedCharacter) => void は (obj: Character) => void の部分型
const character: (obj: WantedCharacter) => void = getName;

// 関数実行
character({ name: "チョッパー", bounty: 1000 });
