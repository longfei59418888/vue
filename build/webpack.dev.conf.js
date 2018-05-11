'use strict'
const webpack = require('webpack')
const path = require('path')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const srcPathAbsolute = path.join(__dirname,'../src'); // 生成html文件
module.exports ={
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js',
  },
  output: {
    path:path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      src: srcPathAbsolute,
    }
  },
  // cheap-module-eval-source-map 开发环境会更快
  devtool: 'cheap-module-eval-source-map',
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
        loaders: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },
  /*
  * devServer
  * 是用来配置 webpack-dev-server
  * 实际是以当前目录开启一个node服务器
  * */
  devServer:{   //用来配置  webpack-dev-server

    clientLogLevel: 'warning',
    before(){ //所有中间件之前
      console.log('devServer.before')
    },
    after(){  // 所有中间件完成之后执行
      console.log('devServer.after')
    },
  //  allowedHosts:[  'host.com'], // 白名单
    compress: true,  //启用zip压缩
    contentBase:path.join(__dirname, "public"),  // 静态资源目录
    headers:{},  // 所有响应中添加信息
    host:'localhost',  // 你希望服务器外部可访问,配置host
    port:8081,  //  端口号
    hot: true, //  启用 webpack 的模块热替换特性
    hotOnly: true, // 错误时候回不热替换
    // inline: true   两种模式  inline --  重载的js脚本加到打包中 。  iframe --  重载的脚本加到了iframe中
    noInfo: true,   //没有提示  ， 错误警告任会出现
    open: true,    //  自动打开浏览器
    overlay:{ warnings: false, errors: true },   //  全屏显示错误
    proxy:{
      "/api": "http://localhost:3000"  //   /api/users --> http://localhost:3000/api/users
    },   // 把请求代理到不同的服务器上
    progress:false,  // 运行进度
    publicPath:'/'  // 此路径下的打包文件可在浏览器中访问
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env':  {
        NODE_ENV: '"development"'
      },
      "GLOBAL_URL":'11',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
  ]
}
