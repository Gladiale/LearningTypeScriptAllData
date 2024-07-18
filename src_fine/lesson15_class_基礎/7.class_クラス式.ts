export {};

// クラス式 class{...} (クラス名が不要)
// 定数名としてクラスを定義
const Character = class {
  // 注意: この場合だとprivateやprotectedが付けることができない
  constructor(public name: string) {}

  // ！public限定です (privateやprotected使うことはできない,chatGptにも聞いた)
  // constructor(public name: string, private age: number) {}
};

const jinbe = new Character("ジンベエ");
console.log(jinbe.name);
