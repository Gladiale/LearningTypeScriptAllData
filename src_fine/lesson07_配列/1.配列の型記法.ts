export {};

// 配列の型記法 (型[] | Array<型>)

// 例：number型の値を要素に持つ
const chopper_berry: number[] = [100, 100, 1000];
const chopper_berry2: Array<number> = [10, 100, 1000];

// 型注釈がない場合は型推論で配列の型を得られる
const chopper = ["ヒトヒトの実", 1000, true];

// 読み取り専用配列型（配列の中身変更できない）
// readonly 型[] | ReadonlyArray<型>
const chopper_berry3: readonly number[] = [10, 100, 1000];

// メソッド
// push → 配列の末尾に要素を追加
const chopper_method = [10, 100];
chopper_method.push(1000);
// includes → 値を含んでいるかどうか
console.log("includes:", chopper_method.includes(10));
