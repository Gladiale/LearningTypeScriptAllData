export {};

// 分割代入
const luffy = {
  devil_fruit: "ゴムゴムの実",
  age: 19,
};
// 変数に型注釈がつけられない (型推論によって決まる)
const { devil_fruit, age } = luffy;

// *** 別の変数名を使いたい時 (プロパティ名: 変数名) ***
const chopper = {
  position: "医者",
  bounty: 1000,
};

const {
  position,
  // プロパティ名: 変数名
  bounty: chopper_bounty,
} = chopper;

console.log(chopper_bounty);

// *** ネストした場合 ***
const nami = {
  nickname: "泥棒猫",
  body: {
    bust: 98,
    waist: 58,
    hip: 88,
  },
};

const {
  nickname,
  body: { bust, hip },
} = nami;

console.log(nickname, bust);
