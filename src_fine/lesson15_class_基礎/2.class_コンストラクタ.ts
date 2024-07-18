export {};

// コンストラクタを使用
class Character {
  // メンバー変数
  name: string;
  age: number;
  devil_fruits: string;

  // 初期化 (thisは現在のクラスを意味します)　インスタンス化時実行
  constructor(name: string, age: number, devil_fruits: string) {
    this.name = name;
    this.age = age;
    this.devil_fruits = devil_fruits;
  }

  // メソッド
  hasAbility(): boolean {
    return this.devil_fruits != "なし";
  }
}

const brook = new Character("ブルック", 90, "ヨミヨミの実");
console.log(brook.name);
