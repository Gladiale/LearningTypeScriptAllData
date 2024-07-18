// デフォルト値の設定 (変数にundefinedが入る時に使える)
// 変数名 = 式
type Obj = { berry?: number };
const chopper1: Obj = {};

const chopper2: Obj = {
  berry: 1000,
};

// デフォルト値設定できる
const { berry = 0 } = chopper1;
console.log(berry); // 0

// 既に値があるプロパティにデフォルト値は設定できない
// const { berry = 0 } = chopper2;
// console.log(berry); // 1000
