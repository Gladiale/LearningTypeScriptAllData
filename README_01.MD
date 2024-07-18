[Source](https://www.youtube.com/watch?v=SRUE-9H92_I)

```javascript
// global環境でtypescriptをインストール
npm install -g typescript

tsc -v

// コンパイル（トランスパイル）
tsc src/index.ts

// 作業フォルダのみにtypescriptをインストール
// => 生成されたpackage.jsonに "type": "module" を追加（moduleとして解釈）
npm init --yes

npm install --save-dev typescript@types/node

// コンパイラーを設定(tsconfig.json生成)
// npx はnpmでインストールされたpackageを実行するものです
npx tsc --init

/*
  コンパイルの仕方は二種類
  1.コマンドライン引数で渡す
  2.tsconfig.jsonのファイルを使用
*/

// => tsconfig.jsonの中身を変更("target":"es2021", "module":"esnext")
// => tsconfig.jsonの中身の"moduleResolution":"node"のコメントを外す
// => tsconfig.jsonの中身の"compilerOptions"オブジェクトの外に"include": ["./src/**/*.ts"]追加(意味はコンパイル対象)

// コンパイル
// ↓のコマンドを実行すると、tsconfig.jsonを読み込んで、コンパイルを実行する
npx tsc
```