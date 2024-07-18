export {};

// lookup型 (Tというオブジェクト型が持つKというプロパティの型)
// T[K]という構文
type Character = {
  name: string;
  bounty: number;
};

function getBounty(num: Character["bounty"]) {
  return `${num}ベリー`;
}

// keyof型 (オブジェクトの型からそのプロパティ名の型を得る)
type CharacterKeys = keyof Character;
let key: CharacterKeys; // "name" | "bounty"

key = "name";
key = "bounty";
