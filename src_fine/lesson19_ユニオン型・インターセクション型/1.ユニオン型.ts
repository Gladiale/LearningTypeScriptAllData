export {};

// ユニオン型 (型Tまたは型U)
// 型T | 型U
type Wanted = {
  bounty: number;
};

type Ability = {
  devil_fruits: string;
};

type Character = Wanted | Ability;

const chopper1: Character = {
  bounty: 1000,
};

const chopper2: Character = {
  devil_fruits: "ヒトヒトの実",
};

function GetBounty1(chara: Wanted): number {
  return chara.bounty;
}

/*
function GetBounty2(chara: Character): number {
  // ！Ability型かもしれないので、chara.bountyはエラーになります
  return chara.bounty;
}
*/

type Wanted1 = {
  bounty: number;
  data: number;
};

type Ability1 = {
  devil_fruits: string;
  data: string;
};

type Character1 = Wanted1 | Ability1;

function GetData(chara: Character1): number | string {
  return chara.data;
}
