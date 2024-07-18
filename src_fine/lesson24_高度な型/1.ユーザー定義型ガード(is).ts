export {};
// 説明(必見): https://qiita.com/ryo2132/items/ce9e13899e45dcfaff9b#%E5%8F%82%E8%80%83

// ユーザー定義型ガード(型推論をの補強)
// 返り値の型「引数 is 型」(型の絞り込みを自由にできる)
type StrawHatPirate = {
  name: string;
  bounty: number;
  captain: "luffy";
};

// isStrawHatPirateというユーザー定義型ガード
// 麦わらの一味の型かどうか調べる
function isStrawHatPirate(crew: any): crew is StrawHatPirate {
  if (crew == null) return false;
  return (
    crew.captain === "luffy" &&
    typeof crew.name === "string" &&
    typeof crew.bounty === "number"
  );
}

function introduce(pirate: unknown) {
  if (isStrawHatPirate(pirate)) {
    console.log("麦わらの一味です");
  } else {
    console.log("麦わらの一味ではありません");
  }
}

const chopper: StrawHatPirate = {
  name: "チョッパー",
  bounty: 1000,
  captain: "luffy",
};
introduce(chopper);

const bepo = {
  name: "べポ",
  bounty: 500,
  captain: "law",
};
introduce(bepo);
