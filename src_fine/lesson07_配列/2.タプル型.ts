export {};

// タプル型 (要素数が固定された配列型)
// []の中で型をコンマで並べ書く
const chopper: [string, number] = ["ヒトヒトの実", 1000];

// !タプル型は要素数を超えた位置にアクセスできない
// chopper[2]

// ラベル付きタプル型 (各要素が何を表すかがわかる)
// [識別子: 型]
type Chara = [devil_fruit: string, bounty: number];
const chopper_label: Chara = ["ヒトヒトの実", 1000];

// !識別子でのアクセスはできないのです
// chopper_label[:devil_fruits]

// 読み取り専用タプル型
const chopper_readonly: readonly [string, number] = ["ヒトヒトの実", 1000];

// オプショナル要素を持つタプル型
type CharaOptional = [string, number, string?];
type CharaOptional2 = [name: string, bounty: number, devil_fruit?: string];

const chopper_optional: CharaOptional = ["チョッパー", 1000];
const chopper_optional2: CharaOptional2 = ["チョッパー", 1000];
