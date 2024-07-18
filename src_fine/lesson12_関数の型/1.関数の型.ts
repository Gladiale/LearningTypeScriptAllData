export {};

// 関数の型 (アロー関数と同じような記法)
// (引数名: 型) => 返り値の型
type S = (material: string) => string;

const createDevilFruits: S = (str) => str.repeat(2) + "の実";

console.log(createDevilFruits("コム"));
