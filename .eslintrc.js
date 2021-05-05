module.exports = {
  root: true,
  env: {
    // 用于跳过各自环境的全局变量，也可以分开使用 node 和 browser 属性
    'shared-node-browser': true,
    es6: true
  },
  rules: {
    // 构建时避免 console 和 debugger 被一起构建上去
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  // 为了语法解析
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  }
}