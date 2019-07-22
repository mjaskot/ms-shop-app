import { createLogger, format, transports } from "winston";
//import envVariables from "./env.initializer";

const { File, Console } = transports;

const wintstonLogger = createLogger({
  level: "info"
});

if (process.env.NODE_ENV === "production") {
  const fileFormat = format.combine(format.timestamp(), format.json());
  const errTransport = new File({
    filename: "./logs/error.log",
    format: fileFormat,
    level: "error"
  });

  const infoTransport = new File({
    filename: "./logs/combined.log",
    format: fileFormat
  });

  wintstonLogger.add(errTransport);
  wintstonLogger.add(infoTransport);
} else {
  const errorStackFormat = format(info => {
    if (info.stack) {
      console.log(info.stack);
      return false;
    }
    return info;
  });

  const consoleTransport = new Console({
    format: format.combine(
      format.colorize(),
      format.simple(),
      errorStackFormat()
    )
  });

  wintstonLogger.add(consoleTransport);
}

export const logger = wintstonLogger;
