// 多分これはModuleとして識別の意味、さもないと他のtsファイルの変数名は再定義になって、コンパイルエラーになります
export {};

// クラス定義
class Character {
  // メンバー変数
  name: string = "";
  age: number = 0;
  devil_fruits: string = "なし";

  // メソッド
  hasAbility(): boolean {
    // thisは現在のクラスを意味します
    return this.devil_fruits != "なし";
  }
}

// インスタンス化
const luffy = new Character();
console.log(luffy.name);

luffy.name = "ルフィ";
console.log(luffy.name);

const nami = new Character();
console.log(nami.hasAbility());

const chopper = new Character();
chopper.devil_fruits = "ヒトヒトの実";
console.log(chopper.hasAbility());
