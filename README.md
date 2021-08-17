![GitHub Workflow Status](https://img.shields.io/github/workflow/status/dominickolbe/whats-the-weather/Test?label=test)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/dominickolbe/whats-the-weather/Release?label=release)
![GitHub package.json version](https://img.shields.io/github/package-json/v/dominickolbe/whats-the-weather)
![npm](https://img.shields.io/npm/v/@domnc/whats-the-weather)

<p align="center">
  <p align="center">:sunny: :cloud: :zap:</p>
  <h2 align="center">whats the weather</h2>
  <p align="center">get weather data using your terminal</p>
</p>

## Usage

Run the app using `npx`

```bash
npx @domnc/whats-the-weather <location>
```

Example

```bash
npx @domnc/whats-the-weather London
```

---

## Getting Started

### Prerequisites

I build this project with the following setup:

- macOS Monterey v12.0 Beta
- node v16.6.2
- yarn v1.22.11
- npm v7.20.3

### Development

1. create your `.env` file based on the `.env.example`

2. install all necessary dependencies

```bash
yarn install
```

3. start app

```bash
yarn start <city>

# Example
yarn start London
```

### Tests

run prettier check

```bash
yarn prettier-check
```

run all tests

```bash
yarn test
```

---

## LICENSE

Copyright © 2021 [Dominic Kolbe](https://dominickolbe.dk) :de:
