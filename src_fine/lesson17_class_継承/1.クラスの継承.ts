export {};

// *** クラスの継承 ***

// クラス宣言の場合
// class クラス名 extends 親クラス{...}

// クラス式の場合
// class extends 親クラス{...}

class Character {
  constructor(public name: string) {}
}

class AbilityPerson extends Character {
  devil_fruits: string = "";
}

const luffy = new AbilityPerson("ルフィ");
console.log(luffy.name);
