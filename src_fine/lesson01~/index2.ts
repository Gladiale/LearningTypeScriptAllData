export {};

/** ***********************************************************************
 * 部分型
 *    二つの型の互換性を表す
 *      (ある型に別の型を代入できるかどうか)
 *      構造的部分型  =>typeScriptは構造的部分型
 *        (プロパティを比較する)
 *      名前の部分型　=>特定の宣言が必要
 *        (継承などの用いている)
 *
 * 部分型の条件
 *    1.プロパティが全てある
 *    2.そのプロパティが全て同じ型(部分型)
 *
 * ************************************************************************
 */

// 部分型========================================
// 人
type Person = {
  name: string;
  age: number;
};

// 能力者
type AbilityPerson = {
  name: string;
  age: number;
  devil_fruit: string;
};

// => 能力者は人の部分型
const luffy: AbilityPerson = {
  name: "ルフィ",
  age: 19,
  devil_fruit: "ゴムゴムの実",
};

// 海王類
type SeaKing = {
  kind: string;
};

const main_character: Person = luffy;
console.log(main_character);

// 部分型じゃないとエラーになります：
/*
const main_character2: Seaking = luffy;
console.log(main_character2);
*/

// 型にプロパティが持たないとエラーになります：
/*
const Ace: Person = {
  name: "エース",
  age: 20,
  devil_fruit: "メラメラの実"
}
*/

// 型推論で自動的Ace_objの型を決めます
const Ace_obj = {
  name: "エース",
  age: 20,
  devil_fruit: "メラメラの実",
};
// ただの変数に代入されているのでチェックはない
const Ace: Person = Ace_obj;
console.log(Ace);
