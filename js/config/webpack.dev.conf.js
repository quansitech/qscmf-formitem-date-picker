const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const ROOT_PATH = path.resolve(__dirname);

module.exports = {
  mode: 'development',
  entry: {
    time: './src/time.js',
    timeRange: './src/timeRange.js',
    dateRange: './src/dateRange.js'
  },
  output: {
    filename: 'qa-datepicker-[name].js',
    path: path.join(ROOT_PATH, '../../asset/date-picker'),
    publicPath: '__PUBLIC__/date-picker',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
  plugins: [
      new CleanWebpackPlugin(),
      // new BundleAnalyzerPlugin(),
      new HtmlWebpackPlugin({
        filename: path.join(
            ROOT_PATH,
          '../../src/FormType/Time',
          'time.html'
        ),
        template: path.join(ROOT_PATH, '../template', 'time.ejs'),
        inject: false,
        chunks: ['time'],
        customInject: true,
      }),
      new HtmlWebpackPlugin({
        filename: path.join(
            ROOT_PATH,
          '../../src/FormType/TimeRange',
          'time_range.html'
        ),
        template: path.join(ROOT_PATH, '../template', 'timeRange.ejs'),
        inject: false,
        chunks: ['timeRange'],
        customInject: true,
      }),
      new HtmlWebpackPlugin({
          filename: path.join(
              ROOT_PATH,
            '../../src/FormType/DateRange',
            'date_range.html'
          ),
          template: path.join(ROOT_PATH, '../template', 'dateRange.ejs'),
          inject: false,
          chunks: ['dateRange'],
          customInject: true,
        })
  ]
};
