// Setオブジェクト (集合) 重複する値を持たない
const whitebeardPirates: Set<string> = new Set([
  "エドワード・ニューゲート",
  "マルコ",
  "ジョズ",
  "サッチ",
  "光月おでん",
]);
// console.log(whitebeardPirates);

// addメソッド 値を追加
whitebeardPirates.add("ティーチ");
whitebeardPirates.forEach((chara) => console.log("add:", chara));

// deleteメソッド 値を削除
whitebeardPirates.delete("光月おでん");
whitebeardPirates.forEach((chara) => console.log("delete:", chara));
