export {};

// 静的初期化ブロック static{...}
// クラスが評価されるタイミングで実行
console.log("イチジ");
class Character {
  static {
    console.log("ニジ");
  }
}
console.log("サンジ");

class CharacterExecution {
  // 静的プロパティ宣言
  static Chopper;
  // 静的初期化ブロックを利用
  static {
    this.Chopper = new CharacterExecution();
    // クラス内なので、プライベートプロパティのアクセスは可能
    this.Chopper.#bounty = 100;
  }
  // プライベートプロパティ、クラス内のみアクセス可能
  #bounty: number = 0;
  getBounty() {
    return this.#bounty;
  }
  setBounty(bounty: number) {
    if (bounty <= 1000) {
      return;
    }
    this.#bounty = bounty;
  }
}

const chopper = new CharacterExecution();
chopper.setBounty(100);
console.log(chopper.getBounty());

// 静的プロパティインスタンス化しないままアクセス
console.log(CharacterExecution.Chopper.getBounty());
