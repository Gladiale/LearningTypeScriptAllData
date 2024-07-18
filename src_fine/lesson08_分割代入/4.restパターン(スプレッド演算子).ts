// restパターン スプレッド演算子 (残りのプロパティすべて代入される)
// ...という記号
const robin = {
  height: 188,
  bust: 100,
  waist: 60,
  hip: 90,
};

// ...three_sizeはheightプロパティを取り除いた新たなオブジェクト
const { height, ...three_size } = robin;
console.log(three_size);
