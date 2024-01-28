import HTMLWebpackPlugin from 'html-webpack-plugin';
import { WebpackPluginInstance, ProgressPlugin, DefinePlugin } from 'webpack';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildPlugins = ({
  paths,
  isDev,
}: BuildOptions): WebpackPluginInstance[] => {
  return [
    new ProgressPlugin(),
    new HTMLWebpackPlugin({ template: paths.html }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];
};
