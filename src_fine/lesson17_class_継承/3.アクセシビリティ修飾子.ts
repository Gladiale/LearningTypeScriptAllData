export {};

// *** アクセシビリティ修飾子 ***
// private (外部からも子クラスからもアクセスできない)
// protected (外部からはアクセスできないが、子クラスからはアクセスできる)

class Character {
  name: string;
  // プライベートプロパティ(メンバー変数に#を付ける)
  #bounty: number;
  constructor(name: string, bounty: number) {
    this.name = name;
    this.#bounty = bounty;
  }
  getBounty(): void {
    console.log(`懸賞金は${this.#bounty}ベリー`);
  }
}

/* エラーになります
class AbilityPerson extends Character {
  getBounty(): void {
    // ！privateは外部からも子クラスもアクセスできない
    console.log(`${this.#bounty}ベリーの能力者`);
  }
}
*/

class Character2 {
  name: string;
  protected bounty: number;
  constructor(name: string, bounty: number) {
    this.name = name;
    this.bounty = bounty;
  }
  getBounty(): void {
    console.log(`懸賞金は${this.bounty}ベリー`);
  }
}

class AbilityPerson2 extends Character2 {
  getBounty(): void {
    console.log(`${this.bounty}ベリーの能力者`);
  }
}

const chopper = new AbilityPerson2("チョッパー", 50);
console.log(chopper.name);
chopper.getBounty();
// ！protectedは外部からのアクセスできない
// console.log(chopper.bounty);
