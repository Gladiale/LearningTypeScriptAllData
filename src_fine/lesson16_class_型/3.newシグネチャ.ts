export {};

// newシグネチャ (オブジェクトの中で使用)
// new (引数): インスタンスの型
class Character {
  name: string = "";
  devil_fruits: string = "なし";
}

// クラスオブジェクト
type CharacterObject = new () => Character;

// newで呼び出したい時はnewシグネチャを使用
type CharacterSignature = {
  new (): Character;
};

const Chara: CharacterSignature = Character;
const zoro = new Chara();
zoro.name = "ゾロ";
console.log(zoro);
