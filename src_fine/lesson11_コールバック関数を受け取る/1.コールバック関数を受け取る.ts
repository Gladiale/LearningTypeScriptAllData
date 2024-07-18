export {};
// コールバック関数を受け取る

// *** mapメソッド *** (コールバック関数を適応して、新しい配列を返す)
type Character = { name: string; bounty: number };
const getBounty = (c: Character) => c.bounty;

const characters = [
  { name: "チョッパー", bounty: 1000 },
  { name: "べポ", bounty: 500 },
];

console.log(characters.map(getBounty));
console.log(characters.map((c: Character) => c.bounty));

// *** filterメソッド *** (条件を満たす要素のみを返す)
type Character2 = { name: string; affiliation: string };
const characters2 = [
  { name: "リフィ", affiliation: "麦わらの一味" },
  { name: "ゾロ", affiliation: "麦わらの一味" },
  { name: "ナミ", affiliation: "麦わらの一味" },
  { name: "エース", affiliation: "白ひげ海賊団" },
  { name: "マルコ", affiliation: "白ひげ海賊団" },
  { name: "ウソップ", affiliation: "麦わらの一味" },
  { name: "サンジ", affiliation: "麦わらの一味" },
];

const strawhatCharacters = characters2.filter(
  (char: Character2) => char.affiliation === "麦わらの一味"
);
console.log(strawhatCharacters);

// *** everyメソッド ***　(配列の全ての要素が指定した条件を満たすかどうかをチェック)
// 全部が条件を満たす場合trueを返す
console.log(
  strawhatCharacters.every(
    (char: Character2) => char.affiliation === "麦わらの一味"
  )
);

// *** someメソッド *** 　(配列のいずれかの要素が指定した条件を満たすかどうかをチェック)
// 一つでも条件を満たす場合trueを返す
console.log(
  characters2.some((char: Character2) => char.affiliation === "麦わらの一味")
);

// *** findメソッド *** (指定された条件を満たす最初の要素を返す)
console.log(
  characters2.find((char: Character2) => char.affiliation === "白ひげ海賊団")
);
