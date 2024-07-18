export {};

// implementsキーワード (インスタンスが与えられた型の部分型であると宣言)
// class クラス名 implements 型 {}

type HasAbility = {
  devil_fruits: string;
};

class AbilityPerson implements HasAbility {
  name: string;
  devil_fruits: string;
  // 部分型である必要があるのでdevil_fruitsは必須
  constructor(name: string, devil_fruits: string) {
    this.name = name;
    this.devil_fruits = devil_fruits;
  }
}
