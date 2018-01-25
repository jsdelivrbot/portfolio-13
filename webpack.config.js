const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const path = require('path');
const precss = require('precss');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const TransferWebpackPlugin = require('transfer-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, './app'),
    build: path.join(__dirname, './public')
}

module.exports = {
    entry: [
        './app/index.jsx',
        'font-awesome/scss/font-awesome.scss',
        './app/assets/sass/main.scss'
    ],
    output: {
        // path: __dirname + '/public',
        pathinfo: true,
        path: PATHS.build,
        filename: './app.js'
    },
    devServer: {
        contentBase: './public',
        publicPath: '/', // Live-reload
        inline: true,
        port: process.env.PORT || 3000, // Port Number
        host: 'localhost', // Change to '0.0.0.0' for external facing server
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    module: {
        loaders: [{
                test: /.js[x]?$/,
                loader: 'babel-loader',
                include: PATHS.app,
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader', // translates CSS into CommonJS modules
                    }, {
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                            plugins() {
                                // post css plugins, can be exported to postcss.config.js
                                return [
                                    precss,
                                    autoprefixer
                                ];
                            }
                        }
                    }, {
                        loader: 'sass-loader' // compiles SASS to CSS
                    }]
                })
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'url-loader?limit=10000',
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: 'file-loader',
            },

            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i,
            //     use: [
            //         'file-loader?name=images/[name].[ext]',
            //         // 'file-loader?name=[name].[ext]&outputPath=images/&publicPath=images/',
            //         'image-webpack-loader'
            //     ]
            // },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        // limit: 8000, // Convert images < 8kb to base64 strings
                        name: '[name].[ext]?[hash]',
                        outputPath: 'assets/images/',
                        publicPath: 'assets/images/'
                    }
                }]
            },
            {
                test: /font-awesome\.config\.js/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'font-awesome-loader' }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('main.css'),
        new TransferWebpackPlugin([
            { from: 'app' },
        ]),
        new CopyWebpackPlugin([
            { from: './app/assets/images/', to: './assets/images/' }
        ])
    ]
};