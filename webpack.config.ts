import path from 'path';
import { Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  console.log('---env', env);

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };

  const mode = env.mode || 'development';
  const port = env.port || 3000;

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    port,
    isDev: mode === 'development',
  });

  return config;
};