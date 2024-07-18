export {};

// *** リテラル型 ***　(プリミティブ型を更に細分化)
// 4種類(文字列/数値/真偽値/BigInt)
type MainChara = "luffy";
const luffy: MainChara = "luffy";

// *** テンプレートリテラル型 *** (特定の形であることをチェックできる)
// バッククオートと${}を使用、${}に入れるのは型
type Word = `${string}に俺はなる`;

function Say(): Word {
  return "海賊王に俺はなる";
}

// ！特定の形である必要ので、Say2の戻り値は当てはまらない
/*
function Say2(): Word {
  return "俺はなる";
}
*/

// *** ユニオン型のリテラル ***
function GetCaptain(group: "ブリキング" | "ハート") {
  return group === "ブリキング" ? "ワポル" : "ロー";
}
console.log(GetCaptain("ブリキング"));
