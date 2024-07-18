export {};

// クラスの型
// クラス宣言 == インスタンスの型の宣言 (変数名と型名を同時に作成)
class Character {
  name: string;
  devil_fruits: string;
  constructor(name: string, devil_fruits: string) {
    this.name = name;
    this.devil_fruits = devil_fruits;
  }
  hasAbility(): boolean {
    return this.devil_fruits != "なし";
  }
}

//  new Characterの型は、Character型
const luffy: Character = new Character("ルフィ", "ゴムゴムの実");

const nami: Character = {
  name: "ナミナミ",
  devil_fruits: "なし",
  hasAbility: () => false,
};

// クラス式では使えない
const Character1 = class {
  name: string;
  devil_fruits: string;
  constructor(name: string, devil_fruits: string) {
    this.name = name;
    this.devil_fruits = devil_fruits;
  }
  hasAbility(): boolean {
    return this.devil_fruits != "なし";
  }
};
const luffy1 = new Character1("ルフィ", "ゴムゴムの実");
// ！Character1は型として使えません
// const luffy2: Character1 = new Character1("ルフィ", "ゴムゴムの実")
