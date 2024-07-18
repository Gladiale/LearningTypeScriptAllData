export {};

// オプショナルチェイニング (オブジェクトがnullやundefinedでも使用可)
// オブジェクト?.プロパティ
type Character = {
  name: string;
  devil_fruits: string;
};

function GetDevilFruits(chara: Character | undefined) {
  console.log(chara?.devil_fruits);
}

const chopper: Character = {
  name: "チョッパー",
  devil_fruits: "ヒトヒトの実",
};

const zoro: undefined = undefined;
GetDevilFruits(undefined);

// メソッドの呼び出しも使用可
type Character2 = {
  hasAbility(): boolean;
};

function checkAbility(chara: Character2 | null) {
  if (chara?.hasAbility()) {
    return "能力者です";
  }
}

// 関数の呼び出しも使用可
type Title = () => string;

function GetTitle(title: Title | null) {
  return title?.();
}

console.log(
  "関数の呼び出し:",
  GetTitle(() => "ワンピース")
);

function GetTitle2(title: Title | null) {
  // ?.はそれ以降をまとめて飛ばす効果を持つ
  return title?.().toUpperCase();
}

console.log(
  "関数の呼び出し:",
  GetTitle2(() => "onepiece")
);

console.log("関数の呼び出し:", GetTitle2(null));
