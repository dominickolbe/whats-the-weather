#!/usr/bin/env node

require("dotenv").config();

import chalk from "chalk";
import { APP_VERSION } from "./config";
import { Api } from "./services/Api";
import { log, printBanner, program, spinner } from "./utils";

const app = async () => {
  printBanner();

  program
    .version(APP_VERSION)
    .argument("<location>", "City name")
    .action(async (location) => {
      spinner.text = `loading weather data for ➜ ${chalk.blue.bold(location)}`;
      spinner.start();

      const result = await Api.weather.getByPlace(location);

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
        spinner.fail(`Oops! Something went wrong!
`);
      }
    })
    .showHelpAfterError();

  program.parse(process.argv);
};

app();
