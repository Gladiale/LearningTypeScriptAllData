export {};

// 型引数を持つクラス (コンストラクタの呼び出し時に指定)
// new クラス<型引数>{}
class Character<T> {
  name: string;
  data: T;
  constructor(name: string, data: T) {
    this.name = name;
    this.data = data;
  }
}

const franky = new Character<string>("ブランキー", "コーラ");

// 型推論で省略可
const usopp = new Character("ウソップ", 19);
