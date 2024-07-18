export {};

// keyof型とジェネリクス(型引数を持つ関数)
const chopper = {
  name: "チョッパー",
  bounty: 1000,
};

type ChopperKeys = keyof typeof chopper;

// オブジェクトとプロパティ名を引数に取り、プロパティの型を返す
type PropertyType<T, K extends keyof T> = T[K];

// オブジェクトchopperの特定のプロパティに対して型を指定
const age: PropertyType<typeof chopper, "bounty"> = 17;
const devil_fruits: PropertyType<typeof chopper, "name"> = "ヒトヒトの実";

/*
keyof型とジェネリクスを組み合わせて使用することで、
オブジェクトの特定のプロパティに対して型を指定することができる
*/
