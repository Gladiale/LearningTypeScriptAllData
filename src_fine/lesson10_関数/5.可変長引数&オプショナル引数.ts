export {};

// *** 可変長引数 *** (任意の数の引数を受け取ることができる)
// ...引数数: 型(rest引数)
function countCrews(...crews: string[]): number {
  console.log(`これで麦わら海賊団は${crews.length}人だ。`);
  return crews.length;
}

countCrews("ルフィ", "ゾロ", "ナミ", "ウソップ");

// スプレッド構文を使用
const crews = ["ルフィ", "ゾロ", "ナミ", "ウソップ"];
countCrews(...crews);

// *** オプショナル引数 *** (渡さなくてもよい引数)
// 引数名?: 型
function introduceCrew(name: string, devil_fruits?: string): void {
  console.log(`名前:${name}、悪魔の実:${devil_fruits}`);
}
introduceCrew("ルフィ", "ゴムゴムの実");
introduceCrew("ナミ");

// デフォルト値 (引数がない場合、デフォルト値が自動で入るようになります)
function introduceCrew2(name: string, devil_fruits: string = "なし"): void {
  console.log(`名前:${name}、悪魔の実:${devil_fruits}`);
}
introduceCrew("ルフィ", "ゴムゴムの実");
introduceCrew2("ナミ");
