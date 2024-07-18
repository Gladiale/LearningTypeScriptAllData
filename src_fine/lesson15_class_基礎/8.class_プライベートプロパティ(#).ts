export {};

// プライベートプロパティ
class Character {
  name: string;
  // プライベートプロパティ(メンバー変数に#を付ける)
  #devil_fruits: string;

  constructor(name: string, devil_fruits: string) {
    this.name = name;
    this.#devil_fruits = devil_fruits;
  }

  public hasAbility(): boolean {
    return this.#devil_fruits != "なし";
  }
}

const robin = new Character("ロビン", "バナバナの実");
console.log(robin.name);
console.log(robin.hasAbility());

// ！privateなので、アクセスがエラーになります
// console.log(robin.#devil_fruits);
