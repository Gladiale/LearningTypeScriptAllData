export {};

// -------- 型引数を持つ関数型 --------
type Bon = <T>(element: T) => T[];

const copy: Bon = (element) => {
  const result = [];
  result.push(element);
  result.push(element);
  return result;
};

console.log(copy("ウソップ"));
