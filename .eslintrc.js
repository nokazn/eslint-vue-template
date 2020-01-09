module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/recommended',
    'eslint:recommended'
  ],
  rules: {
    'vue/html-closing-bracket-newline': [2, {
      'singleline': 'never',
      'multiline': 'never'
    }],
    // return 文で代入しない
    'no-return-assign': 2,
    // return await としない
    'no-return-await': 2,
    // throw するときは Error オブジェクトを投げる
    'no-throw-literal': 2,
    // 不要な return はしない
    'no-useless-return': 2,
    // async 関数必ず await を使う
    'require-await': 1,
    // 上の階層の変数名を使用しない
    'no-shadow': 1,
    // undefined を使用しない
    'no-undefined': 1,
    // production 環境で console を使用しない
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // production 環境で debugger を使用しない
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // 配列の括弧の改行の仕方を統一する
    'array-bracket-newline': [2, 'consistent'],
    // 配列の要素の改行の仕方を統一する
    'array-element-newline': [2, 'consistent'],
    // ブロックスコープ内の前後にスペースを入れる
    'block-spacing': [2, 'always'],
    // コンマのあとにのみスペースを入れる
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    // 関数呼び出しの括弧の前にスペースを入れない
    'func-call-spacing': [2, 'never'],
    // インデントは2
    'indent': [2, 2, {
      // Switch 文で Case をインデントする
      'SwitchCase': 1
    }],
    // 不要なカッコをつけない
    'no-extra-parens': 1,
    // 空白行は1行まで
    'no-multiple-empty-lines': [2, {
      'max': 1
    }],
    // コメント以外で複数のスペースをつけない
    'no-multi-spaces': [2, {
      'ignoreEOLComments': true
    }],
    // 複数のスペースを使用しない
    'no-trailing-spaces': 2,
    // if 文などでブロックスコープでない要素を横に書く
    'nonblock-statement-body-position': [2, 'beside'],
    // var を禁止する
    'no-var': 2,
    // 文字列はシングルクォートのみ
    'object-curly-spacing': [1, 'always'],
    // 変数宣言ごとに const / let を書く
    'one-var': [1, 'never'],
    // 演算子で改行するときは行頭から始める
    'operator-linebreak': [1, 'before'],
    // シングルクォーテーションを用いる
    'quotes': [2, 'single'],
    // セミコロンを必ずつける
    'semi': [2, 'always'],
    // セミコロンの後ろにのみスペースをつける
    'semi-spacing': 2,
    // ブロックスコープの前にスペースを入れる
    'space-before-blocks': 2,
    // セミコロンは末尾につける
    'semi-style': 2,
    // 関数宣言の括弧の前にスペースを入れる
    'space-before-function-paren': [1, 'always'],
    // 括弧内の前後にスペースを入れない
    'space-in-parens': 2,
    // 中置演算子の前後にスペースを入れる
    'space-infix-ops': 2,
    // 単項演算子の前のスペース
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
