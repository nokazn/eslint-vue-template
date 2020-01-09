## ESlint template for Vue.js

Vue.js 用の ESLint のテンプレート。

### インストール

```bash
$ npm i -D eslint eslint-plugin-vue
```

or

```bash
$ yarn add -D eslint eslint-plugin-vue
```

### VSCode で自動フォーマット

`setting.json`を編集する。

```json
// ファイル保存時に lint を走らせる
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```

なお、`eslint.autoFixOnSave`オプションは deprecated になったため、注意する。
