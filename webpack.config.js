const path = require('path');
var webpack = require("webpack");
const HtmlWebPackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const resolve = relativePath => path.resolve(__dirname, '..', relativePath);
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
        // vendors: [
        //     "webpack-material-design-icons"
        // ]
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
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                // vue-loader config to load `.vue` files or single file components.
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles
                        css: ['vue-style-loader', {
                            loader: 'css-loader',
                        }],
                        js: [
                            'babel-loader',
                        ],
                    },
                    cacheBusting: true,
                },
            },
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
                    loader: 'file-loader?outputPath=/dist/images'
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
            },
           /* {
                
                test: /\.(svg|eot|woff|ttf|svg|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[path][name].[ext]"
                        }
                    }
                ]
               
            } */
        ]
    },
    resolve: {
        /**
         * The compiler-included build of vue which allows to use vue templates
         * without pre-compiling them
         */
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        },
        extensions: ['*', '.vue', '.js', '.json'],
    },
    devServer: {
        publicPath: "/",
    }
}