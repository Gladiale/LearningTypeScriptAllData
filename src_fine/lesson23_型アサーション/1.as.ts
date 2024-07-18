export {};

// 型アサーション(型の上書き)
// TSの型の安全性が破壊されるのため、できるだけ使用は避けた方がいい

// 式 as 型 (その式の型を強制的に変える)
function GetBounty(berry: string | number) {
  // 強制的に型変更
  const new_berry = berry as string;
  console.log(`${new_berry.length}桁`);
}

GetBounty("1000"); // 4桁
// 安全性破壊
GetBounty(1000); // undefined桁

// 使用して良い例
type Person = {
  name: string;
  ability: false;
};

type AbilityPerson = {
  name: string;
  ability: true;
  devil_fruits: string;
};

type Character = Person | AbilityPerson;

function GetDevilFruits(characters: Character[]): string[] | undefined {
  // if文内部の型推論がちゃんと作動しないため、型アサーションを使用して型を強制変更
  if (characters.every((chara) => chara.ability)) {
    const new_characters = characters as AbilityPerson[];
    return new_characters.map((chara) => chara.devil_fruits);
  }
  return undefined;
}

const result = GetDevilFruits([
  { name: "test", ability: true, devil_fruits: "test" },
]);
console.log(result);
