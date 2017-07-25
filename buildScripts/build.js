/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod.js';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';  //used by babel and other to determine production build.

console.log(chalk.blue('Generating minification bundle from Produciton. This will take a moment...'));
webpack(webpackConfig).run((err,stats) =>{
  if (err){
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasError){
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

  if(jsonStats.hasWarning){
    console.log(chalk.yellow('WebPack generated the following warnings...'));
    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
  }

  console.log(`Webpack stats: ${stats}`);

  //if we get this far , the build was succesful
  console.log(chalk.green('Your App has been build for production and written to /dist'));
  return 0;

});

