export {};

type Chara = string;

// オプショナルな型引数 (省略可能な型引数)
// 型名<型引数 = 型引数(デフォルト)>
type Family<Parent = Chara, Child = Chara> = {
  father: Parent;
  child: Child;
};

type D1 = Family<string, string>;
type D2 = Family;

// 第一引数の型がnumber, 第二引数の方はデフォルトのstring
type D3 = Family<number>;

const D1_family: D1 = {
  father: "ロジャー",
  child: "エース",
};

const D2_family: D2 = {
  father: "ロジャー",
  child: "エース",
};

const D3_family: D3 = {
  father: 0,
  child: "エース",
};
