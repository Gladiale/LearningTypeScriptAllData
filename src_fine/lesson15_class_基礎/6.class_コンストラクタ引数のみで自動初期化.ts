export {};

// 一般な書き方
class Character {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// ***コンストラクタ引数でプロパティ(メンバー変数)宣言***
class CharacterWithParam {
  // 修飾子 => 引数であると同時にプロパティ(メンバー変数)宣言
  //        => 引数が自動的に初期値 ({}内this.param = paramの記入は不要になります)
  // もちろんpublic以外の修飾子に書き換えても大丈夫(publicは省略しない、必ず付けてください)
  constructor(public name: string, public age: number) {}
}

const zoro = new CharacterWithParam("ゾロ", 21);
console.log(zoro.name);
