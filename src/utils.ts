import chalk from "chalk";
import { Command } from "commander";
import ora from "ora";
import { APP_NAME } from "./config";

export const log = console.log;
export const clear = console.clear;

export const printBanner = () => {
  log(
    chalk.bold(`
  ✨ ${APP_NAME} ✨

`)
  );
};

export const spinner = ora({
  spinner: "dots",
  indent: 2,
});

export const program = new Command();
