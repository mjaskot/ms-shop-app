import * as Redis from "ioredis";
import { RedisConnection } from "../interfaces/customTypes";

const publisher = new Redis();
const subscriber = new Redis();

const createRedisConnection = (
  publisher: Redis.Redis,
  subscriber: Redis.Redis
): RedisConnection => {
  return { publisher, subscriber };
};

const redisConnection: RedisConnection = createRedisConnection(
  publisher,
  subscriber
);

export default redisConnection;
