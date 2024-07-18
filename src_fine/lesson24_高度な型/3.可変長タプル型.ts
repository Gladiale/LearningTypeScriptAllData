export {};

// 可変長タプル型 (配列型の要素が任意個いれられる)
// ...配列型
type AgeAndString = [number, ...string[]];

const nami: AgeAndString = [20, "ナミ"];
const nami2: AgeAndString = [20, "ナミ", "泥棒猫"];
// 任意個なので、0個も大丈夫
const nami3: AgeAndString = [20];

// 注意点:
// ！1.タプル型は一回しかしか使えない
// type T1 = [number, ...string[], ...string[]];

// ！2.オプショナルな要素より前では使えない
// type T2 = [...string[], number?];

// 別のタプル型(配列型)に展開できる
type SSN = [string, string, number];
type NSSNS = [number, ...SSN, string];
