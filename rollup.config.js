// 代码压缩
import { terser } from 'rollup-plugin-terser'

// 用于分析构建后的代码
import visualizer from 'rollup-plugin-visualizer'
import pkg from './package.json'

const isProd = process.env.NODE_ENV === 'production'


// 配置输出格式
export default [
  {
    input: 'src/index.esm.js',
    output: {
      file: 'dist/lib.esm.js',
      format: 'es'
    }
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/lib.commonjs.js',
      format: 'cjs'
    }
  },
  {
    input: './src/index.js',
    output: {
      file: `./dist/lib${isProd ? '.min' : ''}.js`,
      format: 'umd'
    },
    plugins: [
      isProd && terser(),
      process.env.npm_config_report && visualizer({
        title: `${pkg.name} - ${pkg.author.name}`,
        filename: 'bundle-analyzer-report.html'
      })
    ]
  }
]
