import app from "./app";

import { logger } from "./misc/Logger";
import envVariables from "./misc/env.initializer";

const chalk = require("chalk");

const bootstrap = async () => {
  try {
    app.listen(envVariables.port, () =>
      logger.info(
        `Server is listening on port -> ${chalk.blue.underline.bold(
          envVariables.port
        )}`
      )
    );
  } catch (err) {
    logger.error(err);
  }
};

bootstrap();
