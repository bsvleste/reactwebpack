
const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin') 
const isDevelopment = process.env.NODE_ENV != ' production';
module.exports ={
  mode:isDevelopment ? "development":"production",
  devtool:isDevelopment ? 'eval-source-map':'source-map',
  /*arquivo inicial da aplicação*/
  entry:path.resolve(__dirname,'src','index.tsx'),
 /*arquivo que sera gerado pelo webpack*/ 
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:"bundle.js"
  },
  //arquivos de escrita aceitos na aplicação
  resolve:{
    extensions:['.js','.jsx','.ts','.tsx'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8080,
    hot:true,
  },
  plugins:[
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'public','index.html')
    })
  ].filter(Boolean),
  //configuração de importação 
  module:{
    rules:[
      {
        test: /\.(t|j)sx$/,
        exclude:/node_modules/,
        use:{
          loader:"babel-loader",
          options:{
            plugins:[
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        }
      },
       {
        test:/\.scss$/,
        exclude:/node_modules/,
        use:['style-loader','css-loader','sass-loader'],
       }
  ],
  }
}