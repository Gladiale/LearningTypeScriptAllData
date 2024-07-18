export {};

// *** オーバーライド ***
// 親の機能を上書き (親の機能を子クラスでも宣言する)

class Character {
  constructor(public name: string) {}
  introduce(): string {
    return `私は${this.name}です`;
  }
}

class AbilityPerson extends Character {
  introduce(): string {
    return `私は能力者の${this.name}です`;
  }
}

const nami = new Character("ナミ");
const chopper = new AbilityPerson("チョッパー");

console.log(nami.introduce());
console.log(chopper.introduce());

// 注意: 上書きできるのは部分型である必要です、部分型じゃないと上書き出来ません

// ！上書きできない例 (親の() => stringは() => voidで上書きできない)
// class AbilityPerson2 extends Character {
//   introduce(): void {
//     console.log(`私は能力者の${this.name}です`);
//   }
// }

// *** コンストラクタのオーバーライド ***
class Character2 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class AbilityPerson2 extends Character2 {
  devil_fruits: string;
  constructor(name: string, devil_fruits: string) {
    // 親のコンストラクタを呼び出す(注意: superはthisの前に必ず実行する必要がある)
    super(name);
    this.devil_fruits = devil_fruits;
  }
}

// *** override修飾子 ***
// override メソッド/プロパティ (オーバーライドだと明示的宣言する)
class Character3 {
  constructor(public name: string) {}
  introduce(): string {
    return `私は${this.name}です`;
  }
}

class AbilityPerson3 extends Character {
  devil_fruits: string = "あり";
  override introduce(): string {
    return `私は能力者の${this.name}です`;
  }
}

// TS コンパイラオプション
// "noImplicitOverride"をtrue => 必ずoverrideをつける必要がある
