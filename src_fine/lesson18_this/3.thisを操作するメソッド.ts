export {};

// thisを操作するメソッド
class Character {
  name: string;
  bounty: number;
  constructor(name: string, bounty: number) {
    this.name = name;
    this.bounty = bounty;
  }

  stronger(Chara: Character[]): Character[] {
    return Chara.filter((c) => c.bounty > this.bounty);
  }
}

const usopp = new Character("ウソップ", 500_000_000);
const jinbe = new Character("ジンベエ", 1_100_000_000);
const chopper = new Character("チョッパー", 1_000);

// *** applyメソッド *** (関数funcを、thisをthisArgにして呼び出す)
// func.apply(thisArg, [argsArray])

// thisはchopper
console.log(chopper.stronger([usopp, jinbe]));

// thisはusopp
console.log("apply:", chopper.stronger.apply(usopp, [[usopp, jinbe]]));

// *** callメソッド *** (関数funcを、thisをthisArgにして呼び出す)
// func.call([thisArg[, arg1, arg2, ...argN]])
console.log(chopper.stronger([usopp, jinbe]));

console.log("call:", chopper.stronger.call(usopp, [usopp, jinbe]));

// *** bindメソッド *** (関数funcを、thisをthisArgに固定する)
// func.bind(thisArg)

// thisをchopperに固定
const chopper_stronger = chopper.stronger.bind(chopper);
console.log("bing:", chopper_stronger([jinbe, usopp]));

// thisはbindで固定されたので、callやapplyは変えられない
console.log("call変更できない:", chopper_stronger.call(jinbe, [jinbe, usopp]));
