export {};

// オプショナルプロパティ (あってもなくても良い)
// プロパティ名?
type Character = {
  name: string;
  devil_fruits?: string;
};

const sanji: Character = {
  name: "サンジ",
};

type Character2 = {
  name: string;
  devil_fruits: string | undefined;
};

const sanji2: Character2 = {
  name: "サンジ",
  // devil_fruitsは省略できない
  devil_fruits: undefined,
};
