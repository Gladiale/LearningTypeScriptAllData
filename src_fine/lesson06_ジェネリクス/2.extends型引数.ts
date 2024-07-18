export {};

type Character = {
  name: string;
};

// extends型 <S extends T>
// S extends T と書いた場合は「SはTの部分型」という制約があります。
type Family<Parent extends Character, Child extends Character> = {
  father: Parent;
  child: Child;
};

// ！部分型ではないとエラーになります。
// type D = Family<string, string>

// RogerはCharacterの部分型
type Roger = {
  name: string;
};

// AceはCharacterの部分型
type Ace = {
  name: string;
  devil_fruit: string;
};

type D = Family<Roger, Ace>;
