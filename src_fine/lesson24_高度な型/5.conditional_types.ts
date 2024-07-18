export {};

// conditional types (XがYの部分型ならばS、そうでなければT)
// X extends Y ? S : T
type Ability = {
  devil_fruits: string;
};

// 型Tがdevil_fruitsプロパティが持つばtrue, なければfalse
type IsAbility<T> = T extends Ability ? true : false;

const luffy = {
  name: "ルフィ",
  devil_fruits: "ゴムゴムの実",
};

const sanji = {
  name: "サンジ",
};

type T1 = IsAbility<typeof luffy>; // true
type T2 = IsAbility<typeof sanji>; // false
