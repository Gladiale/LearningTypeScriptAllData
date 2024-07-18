export {};

// Mapオブジェクト (連想配列) キーに対して値を保持
const strawhatPirates: Map<string, string> = new Map([
  // [キー, 値]
  ["ルフィ", "船長"],
  ["ゾロ", "剣士"],
  ["ナミ", "航海士"],
  ["ウソップ", "狙撃手"],
  ["サンジ", "コック"],
]);
// console.log(strawhatPirates);

// getメソッド 値を返す
console.log(strawhatPirates.get("ルフィ"));
console.log(strawhatPirates.get("フランキー"));

// setメソッド 値を保存する
strawhatPirates.set("チョッパー", "医者");
strawhatPirates.forEach((position, chara) =>
  console.log(`set: ${chara}は${position}です。`)
);

// hasメソッド キーがあるか
console.log(strawhatPirates.has("ルフィ"));

// deleteメソッド 削除する
strawhatPirates.delete("ウソップ");
strawhatPirates.forEach((position, chara) =>
  console.log(`delete: ${chara}は${position}です`)
);
