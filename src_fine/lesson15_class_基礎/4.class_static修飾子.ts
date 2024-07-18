export {};

class Character {
  name: string = "";
  age: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// 静的プロパティ/メソッド (static そのクラスそのものに属する)
// クラスに属するものなので、インスタンス作成しなくてもアクセス可能
class CharacterWithStatic {
  // static修飾子
  static title: string = "ワンピース";
  static getMainCharacter() {
    return new Character("ルフィ", 19);
  }

  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// インスタンス作成しないでアクセス
console.log(CharacterWithStatic.title);
console.log(CharacterWithStatic.getMainCharacter());
