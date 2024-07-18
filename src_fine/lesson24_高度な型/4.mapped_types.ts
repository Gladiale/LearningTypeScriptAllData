export {};

// mapped types (Kというユニオン型の要素Pに、Pというプロパティが型Tを持つ)
// {[P in K]: T}
type CharaString = "name" | "devil_fruits" | "captain";

type Character = {
  [P in CharaString]: string;
};

const robin: Character = {
  name: "ロビン",
  devil_fruits: "ハナハナの実",
  captain: "ルフィ",
};
