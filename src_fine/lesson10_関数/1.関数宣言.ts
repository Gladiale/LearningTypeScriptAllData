export {};

// *** 関数宣言 ***
// function 関数名(引数: 型): 戻り値の型 {}

// 関数の巻き上げ
console.log(gomuGomu("バズーカ"));

function gomuGomu(word: string): string {
  return `ゴムゴムの${word}`;
}

console.log(gomuGomu("ピストル"));

// *** 返り値がない関数 *** (void型)
function climaTact(weather: string): void {
  console.log(`今日の天気は${weather}です！`);
}

climaTact("晴れ");
