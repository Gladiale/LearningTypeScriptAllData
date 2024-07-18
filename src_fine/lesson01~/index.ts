export {};

/** **********************************************************************
 * プリミティブ型
 *
 * 基本的な値
 * 1.倫理型(boolean)
 *    trueまたはfalseの真偽値
 * 2.数値型(number)
 *    整数、小数、マイナスの値など
 * 3.文字列型(string)
 *    シングルクォート、ダブルクオート、バッククォート
 * 4.undefined型
 *    値が未定義であることを表す
 * 5.null型
 *    値がないことを表す
 * 6.シンボル型(symbol)
 *    一意で不変の値
 * 7.bigint型
 * number型では扱えない大きな整数
 * **********************************************************************
 */

import { Type } from "typescript";

// 1.倫理型(boolean)
/*===============================================
  const ability_person: boolean = true;
  const not_ability_person: boolean = false;

  console.log("---能力者かどうか---");
  console.log(`=> ルフィ: ${ability_person}`);
  console.log(`=> ナミ: ${not_ability_person}`);
*/

// 2.数値型
/*===============================================
  const chopper_bounty: number = 1000;
  const usopp_bounty: number = 300_000_000;
  console.log("---懸賞金---");
  console.log(`=> チョッバー: ${chopper_bounty}ベリー`);
  console.log(`=> ウソップ: ${usopp_bounty}ベリー`);
*/

// 3.文字列型(string)
/*===============================================
  const luffy: string = "モンキー・D・ルフィ";
  console.log("---海賊王になるは---");
  console.log(`=> ${luffy}`);
*/

// 4.undefined型(undefinedに入るのはundefinedのみです)
/*===============================================
  const pirate_king: undefined = undefined;
  console.log("---海賊王になるは---");
  console.log(`=> ${pirate_king}`);
*/

// 5.null型(undefinedに入るのはnullのみです)
/*===============================================
  const laugh_tale: null = null;
  console.log("---ラフテルとは---");
  console.log(`=> ${laugh_tale}`);
*/

// 6.シンボル型(symbol) 一意で不変な値は同じにはなりません
/*===============================================
const devil_fruit1: symbol = Symbol("ゴムゴムの実");
const devil_fruit2: symbol = Symbol("ゴムゴムの実");
console.log("---シンボルで比較---");
console.log(devil_fruit1 === devil_fruit2);
*/

// 7.bigint型 (整数値の末尾にnをつけることでbigint型になる)
/*===============================================
const luffy_bounty: bigint = 3_000_000_000n;
const jinbe_bounty: bigint = 1_100_000_000n;
console.log(`=> 合計: ${luffy_bounty + jinbe_bounty}ベリー`);
*/

// ************************************************************************

/** **********************************************************************
 * オブジェクトの型
 *    プロパティ名: 型;
 *
 * type文 (型に別名をつける(任意の型))
 *    type型名 = 型;
 *
 * interface宣言 (型名を新規作成する(オブジェクト型だけ))
 *    interface 型名 オブジェクト型;
 *    Declaration merging される:
 *      同じ名前の型が複数あると、自動的に一つの定義にマージしてくれる機能
 *
 * インデックスシグネチャ
 *    [キー名: string]: 型;
 *    どんな名前のプロパティもOK
 *
 * オプショナルなプロパティ
 *    プロパティ名?: 型;
 *    あってもなくてもよいプロパティ
 *
 * 読み取り専用プロパティ
 *    readonly プロパティ名: 型;
 *    再代入できない
 *
 * typeofキーワード
 *    typeof 変数名
 *    型を表す特殊記法
 * **********************************************************************
 */

// オブジェクト============================================
const luffy = {
  devil_fruit: "ゴムゴムの実",
  bounty: 3_000_000_000,
};

// 型の記法================================================
const luffy2: {
  devil_fruit: string;
  bounty: number;
} = {
  devil_fruit: "ゴムゴムの実",
  bounty: 3_000_000_000,
};

// type文 (型に別名をつける)================================
type AbilityPerson = {
  devil_fruit: string;
  bounty: number;
};
const luffy3: AbilityPerson = {
  devil_fruit: "ゴムゴムの実",
  bounty: 3_000_000_000,
};

// interface宣言===========================================
interface AbilityPerson1 {
  devil_fruit: string;
  bounty: number;
}
const luffy4: AbilityPerson1 = {
  devil_fruit: "ゴムゴムの実",
  bounty: 3_000_000_000,
};

// Declaration merging=====================================
interface AbilityPerson2 {
  devil_fruit: string;
}
interface AbilityPerson2 {
  bounty: number;
}
const luffy5: AbilityPerson2 = {
  devil_fruit: "ゴムゴムの実",
  bounty: 3_000_000_000,
};

// インデックスシグネチャ====================================
type BountyData = {
  [key: string]: number;
  //任意のstring型のキーを意味します
};
const chara: BountyData = {
  luffy: 3_000_000_000,
  jinbe: 1_100_000_000,
  chopper: 1_000,
};
// インデックスシグネチャの注意点：
// どんなプロパティもアクセスできる
const test: number = chara.ussop;
// 安全性を破壊することも。。。
console.log(test);

// オプショナルなプロパティ==================================
type Character = {
  bounty: number;
  devil_fruit?: string;
};
const luffy6: Character = {
  bounty: 3_000_000_000,
  devil_fruit: "ゴムゴムの実",
};
const ussop: Character = {
  bounty: 500_000_000,
};
// console.log(luffy6.devil_fruit);
// console.log(ussop.devil_fruit);
// string型とundefined型が同時に保有の型はユニオン型と言います

// 読み取り専用プロパティ===================================
type AbilityPerson3 = {
  readonly devil_fruit: string;
};
const luffy7: AbilityPerson3 = {
  devil_fruit: "ゴムゴムの実",
};
// console.log("test:", luffy7.devil_fruit);
// 読み取り専用なので、再代入するとエラーになります：
// luffy7.devil_fruit = "メラメラの実";

// typeofキーワード========================================
const num: number = 0;
type berry = typeof num;
const bounty: berry = 1_000;

// 型推論
const chopper = {
  bounty: 1_000,
  devil_fruit: "ビリビリの実",
};
// 型推論によって決定
type AbilityPerson4 = typeof chopper;
const luffy8: AbilityPerson4 = {
  bounty: 3_000_000_000,
  devil_fruit: "ゴムゴムの実",
};
console.log(luffy8);

// ************************************************************************
