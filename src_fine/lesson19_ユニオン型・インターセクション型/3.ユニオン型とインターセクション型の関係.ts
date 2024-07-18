export {};

// ユニオン型とインターセクション型の関係
type Wanted = { bounty: number };
type Ability = { devil_fruits: string };

function GetBounty(chara: Wanted) {
  return chara.bounty;
}

function GetDevilFruits(chara: Ability) {
  return chara.devil_fruits;
}

// 変数WantedOrAbilityはユニオン型
const WantedOrAbility = Math.random() < 0.5 ? GetBounty : GetDevilFruits;

const jinbe: Wanted = {
  bounty: 110_000_000,
};

// ！引数にWantedとAbility二つの型を渡す必要がある
// WantedOrAbility(jinbe)

const chopper: Wanted & Ability = {
  bounty: 1000,
  devil_fruits: "ヒトヒトの実",
};

console.log(WantedOrAbility(chopper));
