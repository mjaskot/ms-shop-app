import { Router } from "express";
import { logger } from "../../misc/Logger";

const chalk = require("chalk");

export const logRoutersPaths = (router: Router) => {
  return router.stack
    .filter(r => r.route)
    .map(r => {
      logger.info(
        `Successfully registered route! - Method: ${chalk.green.bold(
          Object.keys(r.route.methods)[0].toUpperCase()
        )} -> "${chalk.green.bold(r.route.path)}"`
      );
    });
};
