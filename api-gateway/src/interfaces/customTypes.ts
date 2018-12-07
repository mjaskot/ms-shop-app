import * as Redis from "ioredis";

export type RedisConnection = {
  publisher: Redis.Redis;
  subscriber: Redis.Redis;
};
