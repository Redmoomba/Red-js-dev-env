/* This script generates mockdata for local developmnet
this way youdont hve to point ot an actual API,
but you can enjoy realistic, but randomized data,
and rapid page loads due to local , static data
*/

/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema.js';
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, function(err){
  if (err) {
    return console.log(chalk.red(err));/* eslist-disable no-console */
  } else {
     console.log(chalk.green("Mocke data Generated"));/* eslist-disable no-console */
  }
});
