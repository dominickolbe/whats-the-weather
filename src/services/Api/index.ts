import axios from "axios";
import { Agent } from "http";
import { createErr, createOk } from "option-t/cjs/PlainResult";
import { RtOpenWeatherRequest } from "../../types/openweather";
import { API_HOST, API_KEY, DEFAULT_UNIT } from "./config";

const keepAliveAgent = new Agent({ keepAlive: true });

export const Api = {
  weather: {
    getByPlace: async (query: string) => {
      try {
        const response = await axios({
          method: "get",
          url: API_HOST,
          params: {
            q: query,
            APPID: API_KEY,
            units: DEFAULT_UNIT,
          },
          timeout: 1000 * 30,
          httpAgent: keepAliveAgent,
          httpsAgent: keepAliveAgent,
        });
        return createOk(RtOpenWeatherRequest.check(response.data));
      } catch (error) {
        // console.log(error);
        return createErr(error);
      }
    },
  },
};
