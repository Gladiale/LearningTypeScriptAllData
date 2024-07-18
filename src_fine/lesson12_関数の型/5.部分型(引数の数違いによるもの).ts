export {};

// 部分型(引数の数違いによるもの)

// 引数の少ない関数方はより引数が多い関数型の部分型
type One = (bounty: number) => number;
type Two = (bounty1: number, bounty2: number) => number;

const doubleBounty: One = (bounty) => bounty * 2;
const addBounty: Two = (bounty1, bounty2) => bounty1 + bounty2;

const calcBounty: Two = doubleBounty;
console.log(calcBounty(1000, 50));
