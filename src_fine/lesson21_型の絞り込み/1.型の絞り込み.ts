export {};

// 型の絞り込み (条件によって型が変化する)

// 等価演算子とifによる絞り込み
type hasAbility = "yes" | "no";

function searchAbility(type: hasAbility) {
  return type === "yes" ? "能力者！" : "能力者ではない";
}

function CharacterHasAbility(type: hasAbility | "unknown") {
  if (type === "unknown") {
    return "不明";
  } else {
    return searchAbility(type);
  }
}

// typeof演算子による絞り込み
// console.log(typeof "luffy"); // => "string
function Bounty(value: string | number) {
  if (typeof value === "number") {
    return `${value.toFixed(0)}ベリー`;
  } else {
    return `${value}ベリー`;
  }
}
console.log(Bounty(50.111));

// switch文による絞り込み
type AbilityPerson = {
  devil_fruits: "yes";
  ability: string;
};

type Person = {
  devil_fruits: "no";
  name: string;
};

type Character = AbilityPerson | Person;
function GetName(chara: Character): string {
  switch (chara.devil_fruits) {
    case "yes":
      return "名前は不明の能力者";
    case "no":
      return chara.name;
    default:
      throw new Error("不明なactionです");
  }
}

const nami: Person = {
  devil_fruits: "no",
  name: "ナミ",
};
console.log(GetName(nami));
