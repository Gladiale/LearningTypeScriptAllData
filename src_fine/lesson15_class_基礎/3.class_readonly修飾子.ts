export {};

class Character {
  // readonly修飾子 読み取り専用
  readonly name: string;
  age: number;

  constructor(name: string, age: number) {
    // オブジェクト作成途中なので、readonlyはOKです
    this.name = name;
    this.age = age;
  }

  // ！既に作成されたオブジェクトはreadonlyの関係で書き換え不可
  // setName(name: string) {
  //   this.name = name;
  // }
}

const brook = new Character("ブルック", 90);
console.log(brook.name);

// ！インスタンスが既に作成されたので、readonlyの制限によって、書き換えは不可
// brook.name = "test";
