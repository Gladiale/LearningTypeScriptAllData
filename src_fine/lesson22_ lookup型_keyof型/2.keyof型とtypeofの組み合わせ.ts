export {};

// keyof型とtypeofの組み合わせ
const luffy = {
  name: "ルフィ",
  age: 19,
};

// オブジェクトの型を取得するには、typeofを使用
type LuffyType = typeof luffy;

// keyof型を使用して、このオブジェクトのプロパティ名を取得
type LuffyKeys = keyof LuffyType;

// プロパティ名を使用して、オブジェクトのプロパティにアクセス
const nameKey: LuffyKeys = "name";
const luffyName: string = luffy[nameKey];
console.log(luffyName);

/*
  typeofとkeyof型を組み合わせて使用すると、
  オブジェクトの型からプロパティ名を取得し、
  オブジェクトのプロパティにアクセスすることができる
*/
