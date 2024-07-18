export {};

// アロー関数におけるthis (外側からの関数から受け継ぐ)
// アロー関数は自分自身のthisを持たない
class Character {
  name: string;
  bounty: number;
  constructor(name: string, bounty: number) {
    this.name = name;
    this.bounty = bounty;
  }

  // 自分自身の懸賞金と渡されたキャラクターの懸賞金を比較
  stronger(Chara: Character[]): Character[] {
    console.log("this:", this);
    return Chara.filter((c) => c.bounty > this.bounty);
  } //      　 アロー関数 ↑     ↑ strongerのthisを受け継ぐ

  stronger2(Chara: Character[]): Character[] {
    // ！アロー関数使わないとエラーになります
    //   return Chara.filter(function (c) { return c.bounty > this.bounty });

    // アロー関数使わないエラーにしない方法
    const _this = this; // thisを別の変数にしておく
    /*
    stronger2メソッドの呼び出し時は thisはusopp
    コールバック関数時には改めて関数呼び出されるので undefined
    */
    return Chara.filter(function (c) {
      return c.bounty > _this.bounty;
    });
  }
}

const usopp = new Character("ウソップ", 500_000_000);
const jinbe = new Character("ジンベエ", 1_100_000_000);
const chopper = new Character("チョッパー", 1_000);

console.log(usopp.stronger([jinbe, chopper]));

console.log(usopp.stronger2([jinbe, chopper]));
