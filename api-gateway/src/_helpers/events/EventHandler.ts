import { RedisConnection } from "../../interfaces/customTypes";

export class EventHandler {
  constructor(public readonly redisConnection: RedisConnection) {}

  pub = this.redisConnection.publisher;
  sub = this.redisConnection.subscriber;

  publishEvent(eventName: string, data: string | object) {
    this.pub.publish(
      eventName,
      typeof data === "object" ? JSON.stringify(data) : data
    );
  }

  awaitEventResponse(eventName: string): Promise<object> {
    return new Promise((resolve, reject) => {
      this.sub.subscribe(eventName + "Response", (err: Error) => {
        if (err) {
          reject(err);
        }
        this.sub.on("message", res => {
          const response = JSON.parse(res);
          resolve(response);
        });
      });
    });
  }
}

export const createEventHandler = (redisConnection: RedisConnection) => {
  return new EventHandler(redisConnection);
};
