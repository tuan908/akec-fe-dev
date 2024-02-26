import {LoggerNamespace} from "@/constants";
import dayjs from "dayjs";

const currentTimestampWithFormat = dayjs(new Date())
  .format("YYYY-MM-DD HH:mm:ss.SSS")
  .toString();

export class Logger {
  public static trace(message?: any, ...optionalParams: any[]) {
    console.error(
      `%c${currentTimestampWithFormat} [${LoggerNamespace.Trace}] ${message}`,
      "color:#ef4444",
      ...optionalParams
    );
  }

  public static debug(message?: any, ...optionalParams: any[]) {
    console.log(
      `%c${currentTimestampWithFormat} [${LoggerNamespace.Debug}] ${message}`,
      "color:#38bdf8",
      ...optionalParams
    );
  }

  public static info(message?: any, ...optionalParams: any[]) {
    console.info(
      `%c${currentTimestampWithFormat} [${LoggerNamespace.Info}] ${message}`,
      "color:#22c55e;background-color:#f4f4f5",
      ...optionalParams
    );
  }

  public static warn(message?: any, ...optionalParams: any[]) {
    console.warn(
      `%c${currentTimestampWithFormat} [${LoggerNamespace.Warn}] ${message}`,
      "color:#fcd34d",
      ...optionalParams
    );
  }

  public static error(message?: any, ...optionalParams: any[]) {
    console.error(
      `%c${currentTimestampWithFormat} [${LoggerNamespace.Error}] ${message}`,
      "color:#ef4444",
      ...optionalParams
    );
  }

  public static fatal(message?: any, ...optionalParams: any[]) {
    console.error(
      `%c${currentTimestampWithFormat} [${LoggerNamespace.Fatal}] ${message}`,
      "color:#ef4444",
      ...optionalParams
    );
  }
}
