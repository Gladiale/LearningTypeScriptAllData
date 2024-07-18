export {};

// *** 配列の分割代入 ***
const brother = ["イチジ", "ニジ", "サンジ", "ヨンジ"];
// 配列も変数に型注釈を与えられない
const [one, two, three, four] = brother;
console.log(one, three);

// *** オブジェクトの中の配列 ([]の配列パターンを使用) ***
const family = {
  parents: "ジャッジ",
  children: ["イチジ", "ニジ", "サンジ", "ヨンジ"],
};

const {
  parents,
  // 空白を用いて要素をスキップ
  children: [first, , third],
} = family;
console.log(first, third);

// *** 配列の中のオブジェクト ***
const family2 = [
  {
    child1: "イチジ",
    child2: "ニジ",
    child3: "サンジ",
  },
];

const [{ child3 }] = family2;
console.log(child3);
