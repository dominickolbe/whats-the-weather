#!/usr/bin/env node

const resolve = require("path").resolve;
require("dotenv").config({ path: resolve(__dirname, "../.env") });

import chalk from "chalk";
import { APP_VERSION } from "./config";
import { Api } from "./services/Api";
import { clear, log, printBanner, program, spinner } from "./utils";

const app = async () => {
  clear();
  printBanner();

  program
    .version(APP_VERSION)
    .option("-v, --verbose", "output additional error logs.", () => true, false)
    .argument("<location>", "City name")
    .action(async (arg, options) => {
      spinner.text = `loading weather data for ➜ ${chalk.blue.bold(arg)}`;
      spinner.start();

      const result = await Api.weather.getByPlace(arg);

      if (result.ok) {
        clear();
        spinner.succeed(
          chalk`Weather report for ➜  {bold ${result.val.name}, ${result.val.sys.country}}`
        );

        log(chalk`
  {dim -------------------------------------------------}      

      {bold.underline ${result.val.main.temp.toFixed()}°C}  {dim ➜ ${
          result.val.weather[0].description
        }}{dim , feels like} {dim.bold ${result.val.main.feels_like.toFixed()}°C}

  {dim -------------------------------------------------}`);
        log(chalk`
      Wind:        {bold ${result.val.wind.speed.toFixed()} m/s}
      Humidity:    {bold ${result.val.main.humidity}%}
      Cloudiness:  {bold ${result.val.clouds.all}%}

  {dim -------------------------------------------------}
        `);
      } else {
        if (options.verbose) console.log(result.err);
        spinner.fail(`Oops! Something went wrong!
`);
      }
    })
    .showHelpAfterError()
    .parse(process.argv);
};

app();
