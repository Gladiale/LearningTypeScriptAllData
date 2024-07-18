export {};

// ジェネリック関数 (型引数を受け取ることができる関数)

// ジェネリクス
type Person<S> = {
  name: S;
};
const sanji: Person<string> = {
  name: "サンジ",
};

// -------------- 関数宣言の場合 --------------
// function 関数名<型引数>(引数名: 型): 返り値の型
function copy<T>(element: T): T[] {
  const result: T[] = [];
  result.push(element);
  result.push(element);
  return result;
}
console.log(copy<string>("チョッパー"));
console.log(copy<number>(1000));

// -------------- 関数式の場合 --------------
// function <型引数>(引数名: 型): 返り値の型
const copy1 = function <T>(element: T): T[] {
  const result: T[] = [];
  result.push(element);
  result.push(element);
  return result;
};
console.log(copy1<string>("べポ"));
console.log(copy1<number>(500));

// -------------- アロー関数式の場合 --------------
// <型引数>(引数名: 型): 返り値の型 =>
const copy2 = <T>(element: T): T[] => {
  const result: T[] = [];
  result.push(element);
  result.push(element);
  return result;
};
console.log(copy2<string>("ナミ"));

// -------------- メソッド記法 --------------
// メソッド名<型引数>(引数名: 型): 返り値の型
const bon = {
  copy<T>(element: T): T[] {
    const result: T[] = [];
    result.push(element);
    result.push(element);
    return result;
  },
};
console.log(bon.copy<string>("ルフィ"));
