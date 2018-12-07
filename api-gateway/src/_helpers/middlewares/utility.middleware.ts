import { Request, Response, NextFunction } from "express";
import { EventHandler } from "../events/EventHandler";

export const createUtilityMiddleware = (
  eventHandler: EventHandler,
  event: string
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      eventHandler.publishEvent(event, req.body);
      return res.status(200).json(await eventHandler.awaitEventResponse(event));
    } catch (err) {
      return next(err);
    }
  };
};
