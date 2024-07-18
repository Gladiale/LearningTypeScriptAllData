export {};

// アロー関数式
// const 変数名 = (引数: 型): 戻り値の型 => {}
type Crew = {
  name: string;
  bounty: number;
};

const chopper: Crew = {
  name: "チョッパー",
  bounty: 1000,
};

const introduceCrew = ({ name, bounty }: Crew): void => {
  console.log(`名前:${name}、懸賞金:${bounty}ベリー`);
};

introduceCrew(chopper);

// 省略型 (return省略)
const introduceCrew2 = ({ name, bounty }: Crew): void =>
  console.log(`名前:${name}、懸賞金:${bounty}ベリー`);
