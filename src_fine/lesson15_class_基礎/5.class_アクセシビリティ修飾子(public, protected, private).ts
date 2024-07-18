export {};

// アクセシビリティ修飾子 (public, protected, private)
// どこからアクセスするかを決める
class Character {
  // 何も付けない場合 => publicと同等
  // private　=> class内部のみアクセス可能
  // protected => class内部と継承classにアクセス可能
  name: string;
  private devil_fruits: string;

  constructor(name: string, devil_fruits: string) {
    this.name = name;
    this.devil_fruits = devil_fruits;
  }

  // publicは書かなくても大丈夫
  public hasAbility(): boolean {
    return this.devil_fruits != "なし";
  }
}

const Ace = new Character("エース", "メラメラの実");
console.log(Ace.name);
console.log(Ace.hasAbility);

// ！privateが付いたのプロパティは外部アクセス不可
// console.log(Ace.devil_fruits);
