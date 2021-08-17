#!/usr/bin/env node

import "./lib/env";
import chalk from "chalk";
import { APP_VERSION } from "./config";
import { Api } from "./services/Api";
import { log, printBanner, program, spinner } from "./utils";

const app = async () => {
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
        spinner.succeed(
          `Weather report for ➜ ${chalk.blue.bold(result.val.name)}`
        );

        log(chalk`
    Temperature: {bold ${result.val.main.temp.toFixed()}°C}
    Humidity:    {bold ${result.val.main.humidity}%}
    Cloudiness:  {bold ${result.val.clouds.all}%}
    Wind:        {bold ${result.val.wind.speed.toFixed()} m/s}
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
