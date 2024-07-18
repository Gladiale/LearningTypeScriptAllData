export {};

// as const (型推論に対していくつかの効果を及ぼす => 変更できないものにする)
// 式 as const

// 「wideningしないリテラル型にする」
const characters = ["ルフィ", "ゾロ", "ナミ"];
// 　　　↑ 型がstring[]に拡張された
const characters2 = ["ルフィ", "ゾロ", "ナミ"] as const;
// 　　　↑ 型がreadonly ["ルフィ", "ゾロ", "ナミ"]

/*
  as const の効果
  1. 配列型 -> タプル型
  2. readonlyがついた
  3. wideningしない
*/

// lookup型やtypeofキーワードと組み合わせる
const names = ["luffy", "zoro", "nami"] as const;

//    ↓ "luffy" | "zoro" | "nami" という型が作成できる
type Name = (typeof names)[number];
