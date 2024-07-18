export {};

// クラスオブジェクトの型 (関数型の最初にnewがついた構文)
// new (引数) => インスタンスの型
class Character {
  name: string = "";
  devil_fruits: string = "なし";
}

// 新たな型を作成
type CharacterCreate = new () => Character;

// 生成されるインスタンスがCharacter型
// CharacterCreate型は変数Characterに入っている
const Chara: CharacterCreate = Character;

// クラスオブジェクトの条件を満たす
const sanji = new Chara();
sanji.name = "サンジ";
console.log(sanji);
