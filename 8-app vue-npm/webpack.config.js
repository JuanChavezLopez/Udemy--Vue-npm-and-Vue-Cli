let HtmlWebpackPlugin = require('html-webpack-plugin')
let { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: './src/entrada',
    output: {
        filename: 'salida.js'
    },

    module: {
        rules: [
          // ... other rules
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          }
        ]
      },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new VueLoaderPlugin()
      ]
}