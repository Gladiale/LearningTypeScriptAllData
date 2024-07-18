export {};

// instanceof演算子 (値がクラスオブジェクトのインスタンスか判定)
// 値 instanceof クラスオブジェクト
class Character {
  name: string = "";
}

const chopper = new Character();
// 判定
console.log("クラスCharacterのインスタンス", chopper instanceof Character);

const robin: Character = {
  name: "ロビン",
};
console.log("Character型を持ったオブジェクト:", robin instanceof Character);
