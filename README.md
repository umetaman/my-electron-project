# Electron

[Electron | Build cross platform desktop apps with JavaScript, HTML, and CSS.](https://electronjs.org/)

[API | Electron](https://electronjs.org/docs/api)

# Electronのインストール

```shell
$ npm install -D electron

# ビルドするときに、依存モジュールをインストールしてくれる
# --saveいらないかも
$ npm install --save electron
```

# 必要なモジュール群のインストール
```shell
$ npm install --save electron
$ npm install --save electron-builder
$ npm install --save typescript
# TypeScriptの型定義ファイル
$ npm install --save @types/node
$ npm install --save @types/electron

# Electronについては、これも一応インストール
$ npm install -g typings
$ typings install dt~node -g --save
# 別環境でインストールするとき
$ typings install
```

# TypeScriptの自動コンパイル

# package.jsonの編集

すでに作ってあるpackage.jsonに追記する。
```json
{
	//...
	"scripts": {
		"build": "tsc",
		"watch": "tsc -w"
	}
	//...
}
```

# TypeScriptの設定

プロジェクトのルートで、次のコマンドを実行。
```shell
# tsconfig.jsonを作成
$ tsc --init
```

tsconfig.jsonを次のように編集する。
```json
{
	"compilerOptions": {
		"target": "es5",
		"module": "commonjs",
		"outDir": "./src/js",
		"rootDir": "./src/ts",
		"strict": true,
		"esModuleInterop": true
	},
	"exclude":[
		"node_modules"
	]
}
```

プロジェクトのルートで
```shell
$ npm run watch
```