import { Number, Record, Static, String } from "runtypes";

export const RtOpenWeatherRequest = Record({
  name: String,
  dt: Number,
  main: Record({
    temp_min: Number,
    temp: Number,
    temp_max: Number,
    feels_like: Number,
    pressure: Number,
    humidity: Number,
  }),
  wind: Record({
    speed: Number,
  }),
  clouds: Record({
    all: Number,
  }),
});

export type OpenWeatherRequest = Static<typeof RtOpenWeatherRequest>;
