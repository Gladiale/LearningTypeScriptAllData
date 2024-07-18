export {};

// 組み込みの型

// --------- Partial<T> ---------
// => 全てのプロパティをオプショナルにする
type T = Partial<{
  name: string;
  devil_fruits: string;
}>;

// --------- Pick<T, K> ---------
// => TのうちKのプロパティのみ残す (K 抽出)
type T2 = Pick<
  {
    name: string;
    devil_fruits: string;
  },
  "devil_fruits"
>;

// --------- Omit<T, K> ---------
// => TのうちKのプロパティを取り除く (K 削除)
type T3 = Omit<
  {
    name: string;
    devil_fruits: string;
  },
  "devil_fruits"
>;
