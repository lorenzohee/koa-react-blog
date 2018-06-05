require('babel-core/register')
var config = require('./platforms/common/config')
var webpack = require('webpack')
var path = require('path')
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var extractStyle = new ExtractTextPlugin('all.min.css')
var rucksack = require('rucksack-css')
var autoprefixer = require('autoprefixer')
var fs = require('fs')
var nodeModules = fs.readdirSync('node_modules')
    .filter(function (i) {
        return ['.bin', '.npminstall'].indexOf(i) === -1
    })
var includes = [
    path.resolve(__dirname, 'app'),
    path.resolve(__dirname, 'platforms')
]

module.exports = [{
    name: 'browser side render',
    devtool: 'cheap-source-map',
    entry: ['./platforms/browser/index.js'],
    output: {
        path: path.join(__dirname, '/public/build'),
        filename: '[name].js',
        publicPath: '/build/'
    },
    target: 'web',
    node: {
        fs: 'empty'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: includes,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react',
                            ['env',{
                                'targets': {
                                    'browsers': ['last 2 versions', 'ie >= 9'],
                                },
                                'modules': false,
                                'loose': true,
                                'useBuiltIns': true,
                                'debug': true,
                            },
                            ]
                        ],
                        plugins: [
                            'babel-plugin-transform-class-properties',
                            'babel-plugin-syntax-dynamic-import',
                            [
                                'babel-plugin-transform-runtime', {
                                'helpers': true,
                                'polyfill': true,
                                'regenerator': true,
                            },
                            ],
                            [
                                'babel-plugin-transform-object-rest-spread', {
                                'useBuiltIns': true
                            },
                            ],
                            [
                                'import',
                                {
                                    "libraryName": "antd",
                                    "style": true,
                                }
                            ]
                        ],
                    },
                },
            },
            // {
            //   test: /\.(css|less)$/i,
            //   loader: extractStyle.extract(['style', 'css', 'postcss', 'less'])
            // },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {}
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1 // css-loader options
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                autoprefixer()
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {},
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2 // css-loader options
                        }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                rucksack(),
                                autoprefixer({
                                    browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8']
                                })
                            ],
                        } // postcss-loader options
                    },{
                        loader: 'less-loader',
                        options: { javascriptEnabled: true }
                    }]
            },
            { test: /\.woff2?$/, loader: 'url?limit=10000&minetype=application/font-woff' },
            { test: /\.ttf$/, loader: 'url?limit=10000&minetype=application/octet-stream' },
            { test: /\.eot$/, loader: 'file' },
            { test: /\.svg$/, loader: 'url?limit=10000&minetype=image/svg+xml' },
            { test: /\.(png|jpg|jpeg|gif|webp)$/i, loader: 'url?limit=10000' },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.html?$/, loader: 'file?name=[name].[ext]' }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        extractStyle,
        new webpack.optimize.CommonsChunkPlugin({name: 'common', filename: 'common.js'}),
        new UglifyJsPlugin({
            compress: { warnings: false }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            __SERVER__: false
        })
    ]
}, {
    name: 'server side render',
    devtool: 'cheap-source-map',
    entry: ['./platforms/server/index.js'],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.js',
        publicPath: '/build/',
        libraryTarget: 'commonjs2'
    },
    target: 'node',
    node: {
        fs: 'empty',
        __dirname: true,
        __filename: true
    },
    externals: [
        function (context, request, callback) {
            var pathStart = request.split('/')[0]
            if (pathStart && (pathStart[0] === '!') || nodeModules.indexOf(pathStart) >= 0 && request !== 'webpack/hot/signal.js') {
                return callback(null, 'commonjs ' + request)
            }
            callback()
        }
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                include: includes,
                loader: 'babel-loader',
                query: {
                    plugins: [
                        ["babel-plugin-transform-require-ignore", {
                            "extensions": [".less", ".css"]
                        }]
                    ]
                }
            }, {
                test: /\.(css|less)$/,
                loader: 'null'
            },
            { test: /\.woff2?$/, loader: 'null' },
            { test: /\.ttf$/, loader: 'null' },
            { test: /\.eot$/, loader: 'null' },
            { test: /\.svg$/, loader: 'null' },
            { test: /\.(png|jpg|jpeg|gif|webp)$/i, loader: 'url?limit=10000' },
            { test: /\.json$/, loader: 'json-loader' }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new UglifyJsPlugin({
            compress: { warnings: false }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            __SERVER__: true
        })
    ]
}]