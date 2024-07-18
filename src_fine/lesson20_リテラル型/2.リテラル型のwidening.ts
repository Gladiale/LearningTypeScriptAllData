export {};

// リテラル型のwidening　(型の拡張)
// リテラル型 -> プリミティブ型

// 1.letで宣言された変数に代入されたとき
const luffy = "luffy";
//    ↑ 変数の型が"luffy"
let luffy2 = "luffy";
//    ↑ 変数の型が"luffy"ではなく、stringに拡張される
luffy2 = "ルフィ";

let luffy3: string | number = "luffy";

// 2.オブジェクトリテラルの中
// オブジェクトの各プロパティwidening発生
const luffyObj = {
  name: "ルフィ",
  age: 19,
};
// luffy2と同様後から書き換え可能だから
luffyObj.name = "海賊王";

/*
wideningされるリテラル型とwideningされないリテラル型 => 型推論で推論されたかどうかで決める
*/
// 型推論された"luffy"型
const luffyInference = "luffy";
// 明示的に書いた"luffy"型
const luffyExplicitly: "luffy" = "luffy";

// string型
let newInference = luffyInference;
// "luffy"型
let newExplicitly = luffyExplicitly;
