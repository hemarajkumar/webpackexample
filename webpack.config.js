const path = require('path');
var webpack = require("webpack");
const HtmlWebPackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

//var extractHtml = new HtmlWebPackPlugin ({
//    template: "./src/index.html",
//    filename: "./index.html"
//})

var copyImages = new CopyWebpackPlugin([
    {from:'./src/images/staticimages',to:'./images'} 
])

var copyFonts = new CopyWebpackPlugin([
    {from:'./src/font',to:'./font'} 
])

module.exports = {
    entry: {
        app: './src/index.js',
        plugin: './src/plugin.js'
       // SASS_MAIN_FILE
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist/')
    },
    plugins: [
        //  extractHtml,
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": 'jquery'
        }), 
        copyImages,
        copyFonts,
        new MiniCssExtractPlugin({
            filename: 'styles/main.css'
        })
    ],
    module: {
        rules: [
           /* {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: false }
                    }
                ],
            }, */
            {
                test: /\.(png|jp(e*)g|svg)$/,  
                use: [{
                    loader: 'file-loader?outputPath=/images'
                }]
            },
            {
                test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                              sourceMap: true,
                              config: {
                                path: 'postcss.config.js'
                              }
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
            },
            {
                use: "babel-loader",
                test: /\.js$/, 
                exclude: /node_modules/
                
            },
            {
                test: require.resolve("jquery"),
                use: [
                  {
                    loader: "expose-loader",
                    options: "jQuery"
                  },
                  {
                    loader: "expose-loader",
                    options: "$"
                  }
                ]
              }
        ]
    },
    devServer: {
        publicPath: "/",
    },
}