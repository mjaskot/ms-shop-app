require("dotenv").config();

import { logger } from "./../misc/Logger";

type envVariables = {
  [key: string]: string;
  port: string;
  externalApiURL: string;
  nodeEnv: string;
};

export enum envVars {
  port = "PORT",
  externalApiURL = "EXTERNAL_API_URL",
  nodeEnv = "NODE_ENV"
}

export const getEnvVariable = (variable: envVars): string => {
  const envVariable = process.env[variable];

  if (!envVariable) {
    throw new Error(`Error - Missing evironmental variable: ${variable}`);
  }

  return envVariable;
};

const prepareEnvVariables = (): envVariables => {
  const envVariables: envVariables = Object.entries(envVars).reduce(
    (agg, [key, val]) => {
      agg[key] = getEnvVariable(val);
      return agg;
    },
    {} as envVariables
  );
  logger.info("Sucessfully imported all environmental variables.");
  return envVariables;
};

const envVariables = prepareEnvVariables();
export default envVariables;
