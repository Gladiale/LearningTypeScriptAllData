export {};

// 関数式 (function直後の関数名がない) 関数式の場合は巻き上げ出来ません
// const 変数名 = function(引数: 型): 戻り値の型 {}
type Crew = {
  name: string;
  bounty: number;
};

const chopper: Crew = {
  name: "チョッパー",
  bounty: 1000,
};

const introduceCrew = function (member: Crew): void {
  console.log(`名前:${member.name}、懸賞金:${member.bounty}ベリー`);
};
introduceCrew(chopper);

// 分割代入を利用することもできる
const introduceCrew2 = function ({ name, bounty }: Crew): void {
  console.log(`名前:${name}、懸賞金:${bounty}ベリー`);
};
introduceCrew2(chopper);
