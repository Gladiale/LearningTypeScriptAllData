export {};

// メソッド記法
// プロパティ名(引数: 型): 戻り値の型 => {}
const luffy = {
  name: "ルフィ",
  // 書き方1:
  becomeKingOfPirates1: (character: string): void => {
    console.log(`${character}は海賊王になる男だ！`);
  },
  // 書き方2:
  becomeKingOfPirates2(): void {
    console.log(`${this.name}は海賊王になる男だ！`);
  },
};

luffy.becomeKingOfPirates1("ルフィ");
luffy.becomeKingOfPirates2();
