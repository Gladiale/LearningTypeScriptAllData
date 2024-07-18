export {};

// インターセクション型 (型Tでありかつ型Uでもある)
// 型T & 型U
type Person = {
  name: string;
};

type Ability = {
  devil_fruits: string;
};

type AbilityPerson = Person & Ability;

const luffy: AbilityPerson = {
  name: "リフィ",
  devil_fruits: "ゴムゴムの実",
};

// プリミティブ型のインターセクション型
type StringAndNumber = string & number;
//     ↑ never型の 属する値がない
