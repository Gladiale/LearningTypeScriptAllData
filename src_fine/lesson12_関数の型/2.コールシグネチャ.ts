export {};

// コールシグネチャ (オブジェクト型の中で使用できる構文)
// (引数名: 型): 返り値の型;
type AbilityPerson = {
  age?: number;
  (str: string): void;
};

// string型を受け取る関数
const luffy: AbilityPerson = (str: string) => console.log(`${str}の能力者`);

luffy.age = 19;
console.log(luffy.age);

luffy("ゴムゴムの実");
