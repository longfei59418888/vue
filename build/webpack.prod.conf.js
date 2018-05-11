'use strict'
const path = require('path')
const webpack = require('webpack')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const srcPathAbsolute = path.join(__dirname,'../src'); // 生成html文件
module.exports ={
  context: path.join(__dirname, '../'),
  entry: {
    app: './src/main.js',
    // vendors:['vue','vuex','vue-router','axios']
  },
  output: {
    path:path.join(__dirname, '../dist'),
    // publicPath: '/',
    filename: 'js/[name].[chunkhash].js',
    // 异步加载文件 ,id 为模块的id
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  devtool:  '#source-map',
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      src: srcPathAbsolute,
    }
  },
  module:{
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.vue$/, loader: 'vue-loader'},
      {test: /\.json$/, loader: 'json-loader'},
      {
        test: /\.(png|jpg|gif|mp4|ttf|ogg|svg|woff|woff2)$/,
        loader: 'url-loader?limit=8192&name=./image/[hash].[ext]' // 图片或者
      },
      {
        test: /\.(css|scss)$/,
        loaders:ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader','postcss-loader'],
          fallback: 'vue-style-loader'
        })
      },
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      },
      "GLOBAL_URL":'11',
    }),
    //压缩js文件
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    /*插件：单独使用style标签加载css文件.contenthash代表的是文本文件内容的hash值，也就是只有style文件的hash值*/
    new ExtractTextPlugin({
      filename: 'css/main.[chunkhash].css',
      allChunks: true
    }),
    //压缩提取出的css，
    new OptimizeCSSPlugin(),
    //  每个引用的模块都会通过sha256生成一个id ,并且有引用次数，当引用次数改变时候有可能会变重新编译
    //  HashedModuleIdsPlugin 让 id 固定不变 ，没有改变的模块不会别重新编译
    new webpack.HashedModuleIdsPlugin(),
    // 增加加载速度
    new webpack.optimize.ModuleConcatenationPlugin(),
    // 将 node_modules  中的模块打包到 vendor
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks (module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // 将异步加载的文件分离成独立的文件
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    // app.js 中将多次加载（minChunks >= 3 ）的文件分离出来
    // 如果 children 为 true ,  公共chunk 的子模块都会被选择
    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      async: 'vendor-async',
      children: true,
      minChunks: 3
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    }),
  ]
}



