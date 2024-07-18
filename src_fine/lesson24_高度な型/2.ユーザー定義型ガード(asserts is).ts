export {};

// ユーザー定義型ガード(型推論をの補強)
// 返り値がvoid型 型述語 「asserts 引数 is 型」

type StrawHatPirate = {
  name: string;
  bounty: number;
  captain: "luffy";
};

// 関数が例外を投げずに無事に終了したならば、型述語の条件が満たされる
function assertStrawHatPirate(crew: any): asserts crew is StrawHatPirate {
  if (crew == null) {
    throw new Error("nullやundefinedはだめだよ");
  }
  if (
    crew.captain !== "luffy" ||
    typeof crew.name !== "string" ||
    typeof crew.bounty !== "number"
  ) {
    throw new Error("麦わらの一味じゃないよ");
  }
}

// 例外の有無を判定するのに便利
function checkStrawHatPirate(value: unknown): void {
  assertStrawHatPirate(value);
  console.log("麦わらの一味だ！！");
}

const chopper: StrawHatPirate = {
  name: "チョッパー",
  bounty: 1000,
  captain: "luffy",
};

const bepo = {
  name: "べポ",
  bounty: 500,
  captain: "law",
};

checkStrawHatPirate(chopper);
checkStrawHatPirate(bepo);
