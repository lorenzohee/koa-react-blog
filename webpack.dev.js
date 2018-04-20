process.env.NODE_ENV = 'development'

var webpack = require('webpack')
var path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer')
var includes = [
  path.resolve(__dirname, 'app'),
  path.resolve(__dirname, 'platforms')
]

module.exports = {
  name: 'backend dev hot middlware',
  devtool: 'source-map',
  entry: [
    // For old browsers
    //'eventsource-polyfill',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      path.resolve(__dirname, 'platforms/browser/index.js')

    // './app/app.js'
  ],
  output: {
    path: path.join(__dirname, '/public/static'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/build/'
  },
    resolve: {
        extensions: ['.js','.jsx']
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
   module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
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
                }),
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
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
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                    }, {
                        loader: 'less-loader',
                        options: { javascriptEnabled: true }
                    }],
                    fallback: 'style-loader',
                }),
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        outputPath: 'images',
                    },
                },
            },
            {
                test: /\.js$/,
                use: ['source-map-loader'],
                enforce: 'pre',
            },
        ],
    },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name: 'common', filename: 'common.js'}),
      new ExtractTextPlugin('style.css')
  ]
}