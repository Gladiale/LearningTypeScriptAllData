export {};

// 関数の中のthis (関数の呼び出し方によって決まる)
class Character {
  constructor(public name: string) {}

  introduce(): void {
    console.log(this);
    console.log(`私は${this.name}です`);
  }
}

const luffy = new Character("ルフィ");
luffy.introduce();

const nami = new Character("ナミ");
nami.introduce();

// luffy_introduceに入って関数オブジェクトを代入
const luffy_introduce = luffy.introduce;
luffy_introduce(); // thisがundefined
// thisを使うものはメソッド記法を利用した方が良い
