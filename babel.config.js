const pkg = require('./package.json')

module.exports = {
  presets: [
    ['@babel/preset-env', {
      // 测试时模块需要转换
      modules: process.env.NODE_ENV === 'test' ? 'commonjs' : false
    }]
  ],
  // 配置测试时用到的插件
  env: {
    test: {
      plugins: [
        'istanbul',
        'inline-json-import',
        // 路径别名，不然就只能用长长的路径进行模块引用了
        ['module-resolver',
          {
            root: ['./src/'],
            alias: {
              [pkg.name]: './src/index.esm.js'
            }
          }
        ]
      ]
    }
  }
}