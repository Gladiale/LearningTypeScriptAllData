export {};

// 型引数 (ジェネリクス)
// 型の定義時にパラメータを付与できる (type 型名<型引数>)
type Person<S> = {
  // 型引数Sを宣言の中で使える
  name: S;
};

const sanji: Person<string> = {
  name: "サンジ",
};

// 複数の場合はコンマで区切 (SとNはなんのものでもいいです)
type AbilityPerson<S, N> = {
  name: S;
  age: N;
  devil_fruit: S;
};

const luffy: AbilityPerson<string, number> = {
  name: "ルフィ",
  age: 19,
  devil_fruit: "ゴムゴムの実",
};
