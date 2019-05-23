const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CircularDependencyPlugin = require('circular-dependency-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
// const OfflinePlugin = require('offline-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const openBrowser = require('react-dev-utils/openBrowser');

const nodeEnv = process.env.NODE_ENV || 'development';
const isDev = nodeEnv === 'development';

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || '3000';

// Setup the plugins for development/prodcution
const getPlugins = () => {
  // Common
  const plugins = [
    new ManifestPlugin({
      fileName: path.resolve(process.cwd(), 'public/webpack-assets.json'),
      filter: file => file.isInitial
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name].[contenthash:8].css',
      chunkFilename: isDev ? '[id].chunk.css' : '[id].[contenthash:8].chunk.css'
    }),
    // Stylelint
    new StyleLintPlugin({ failOnError: false }),
    // Setup enviorment variables for client
    new webpack.EnvironmentPlugin({
      ...process.env,
      NODE_ENV: JSON.stringify(nodeEnv)
    }),
    // Setup global variables
    new webpack.DefinePlugin({
      __DEV__: isDev
    })
  ];

  if (isDev) {
    // Development
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
        template: 'src/index.html'
      }),
      // new CircularDependencyPlugin({
      //   exclude: /a\.js|node_modules/, // exclude node_modules
      //   failOnError: false // show a warning when there is a circular dependency
      // }),
      new FriendlyErrorsWebpackPlugin()
    );
  } else {
    // Production
    plugins.push(
      // Minify and optimize the index.html
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        },
        inject: true,
        filename: '../index.html'
      }),
      // Put it in the end to capture all the HtmlWebpackPlugin's
      // assets manipulations and do leak its manipulations to HtmlWebpackPlugin
      // new OfflinePlugin({
      //   relativePaths: false,
      //   publicPath: '/',
      //   appShell: '/',
      //   responseStrategy: 'network-first',
      //
      //   // No need to cache .htaccess. See http://mxs.is/googmp,
      //   // this is applied before any match in `caches` section
      //   excludes: ['.htaccess'],
      //
      //   caches: {
      //     main: [':rest:'],
      //
      //     // All chunks marked as `additional`, loaded after main section
      //     // and do not prevent SW to install. Change to `optional` if
      //     // do not want them to be preloaded at all (cached only when first loaded)
      //     additional: ['*.chunk.js']
      //   },
      //
      //   // Removes warning for about `additional` section usage
      //   safeToUseOptionalCaches: true
      // }),
      new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      }),
      new WebpackPwaManifest({
        name: 'Intersport Digital Basket',
        short_name: 'Basket',
        description: 'Intersport Digital Basket',
        background_color: '#ffffff',
        theme_color: '#153d9f',
        inject: true,
        ios: true,
        icons: [
          {
            src: path.resolve('src/images/intersport-icon.png'),
            sizes: [72, 96, 128, 144, 192, 384, 512]
          },
          {
            src: path.resolve('src/images/intersport-icon.png'),
            sizes: [120, 152, 167, 180],
            ios: true
          }
        ]
      }),
      new webpack.HashedModuleIdsPlugin({
        hashFunction: 'sha256',
        hashDigest: 'hex',
        hashDigestLength: 20
      }),
      // Minimizing style for production
      new OptimizeCssAssetsPlugin(),
      // Plugin to compress images with imagemin
      // Check "https://github.com/Klathmon/imagemin-webpack-plugin" for more configurations
      new ImageminPlugin({
        pngquant: { quality: '95-100' }
      }),
      // Visualize all of the webpack bundles
      // Check "https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-plugin"
      // for more configurations
      new BundleAnalyzerPlugin({
        analyzerMode: process.env.NODE_ENV === 'analyze' ? 'server' : 'disabled'
      })
    );
  }

  return plugins;
};

// Setup the entry for development/prodcution
const getEntry = () => {
  // Production
  if (!isDev) {
    return [require.resolve('react-app-polyfill/ie11'), './src/client.js'];
  }

  // Development
  return [require.resolve('react-app-polyfill/ie11'), './src/client.js'];
};

// Webpack configuration
module.exports = {
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'eval-source-map' : 'hidden-source-map',
  context: path.resolve(process.cwd()),
  entry: getEntry(),
  devServer: isDev
    ? {
        overlay: true,
        port,
        host,
        ...(process.env.PUBLIC_IP
          ? {
              host: '0.0.0.0',
              disableHostCheck: true,
              public: `${process.env.PUBLIC_IP}:${port}`,
              https: true
            }
          : {}),
        publicPath: '/assets/', // Make sure publicPath always starts and ends with a forward slash
        // contentBase: './public',
        hot: true,
        stats: 'minimal',
        historyApiFallback: {
          index: '/assets/index.html',
          disableDotRule: true
        },
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        open: true
        // after: () => {
        //   openBrowser(
        //     `${process.env.PUBLIC_IP || host}${port ? `:${port}` : ''}`
        //   );
        // }
      }
    : undefined,
  optimization: isDev
    ? {
        splitChunks: {
          chunks: 'all'
        }
      }
    : {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              warnings: false,
              compress: {
                comparisons: false
              },
              parse: {},
              mangle: true,
              output: {
                comments: false,
                ascii_only: true
              }
            },
            parallel: true,
            cache: true,
            sourceMap: true
          })
        ],
        nodeEnv: 'production',
        sideEffects: true,
        concatenateModules: true,
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          name: true,
          cacheGroups: {
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendor',
              chunks: 'all'
            },
            main: {
              chunks: 'all',
              minChunks: 2,
              reuseExistingChunk: true,
              enforce: true
            }
          }
        },
        runtimeChunk: true
      },
  output: {
    path: path.resolve(process.cwd(), 'public/assets'),
    publicPath: '/assets/',
    // Don't use chunkhash in development it will increase compilation time
    filename: isDev ? '[name].js' : '[name].[chunkhash:8].js',
    chunkFilename: isDev ? '[id].chunk.js' : '[id].[chunkhash:8].chunk.js',
    pathinfo: isDev
  },
  module: {
    rules: [
      {
        // Eslint
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint',
        options: { failOnError: false }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel',
            options: {
              cacheDirectory: isDev,
              babelrc: false,
              presets: [
                [
                  '@babel/preset-env',
                  {
                    modules: false,
                    useBuiltIns: 'usage',
                    corejs: 2
                  }
                ],
                '@babel/preset-react'
              ],
              plugins: [
                'react-hot-loader/babel',
                'styled-components',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-syntax-dynamic-import'
              ],
              env: {
                production: {
                  plugins: [
                    'lodash',
                    'transform-remove-console',
                    'transform-react-remove-prop-types'
                  ]
                }
              }
            }
          },
          'stylelint-custom-processor-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        include: /node_modules/,
        use: ['react-hot-loader/webpack']
      },
      {
        test: /\.css$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css',
            options: {
              constLoaders: 1,
              modules: false,
              localIdentName: '[name]__[local]--[hash:base64:5]',
              context: path.resolve(process.cwd(), 'src'),
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(woff2?|ttf|eot|svg)$/,
        loader: 'url',
        options: { limit: 10240, name: '[name].[hash:8].[ext]' }
      },
      {
        test: /\.(gif|png|jpe?g|webp)$/,
        // Any image below or equal to 10K will be converted to inline base64 instead
        loader: 'url',
        options: { limit: 10240, name: '[name].[hash:8].[ext]' }
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  },
  plugins: getPlugins(),
  /* Advanced configuration */
  resolveLoader: {
    // Use loaders without the -loader suffix
    moduleExtensions: ['-loader']
  },
  resolve: {
    modules: ['src', 'node_modules'],
    descriptionFiles: ['package.json'],
    extensions: ['.js', '.jsx', '.json']
  },
  cache: isDev,
  target: 'web',
  stats: {
    entrypoints: false,
    children: false
  },
  performance: isDev
    ? undefined
    : {
        assetFilter: assetFilename =>
          !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename)
      }
};
