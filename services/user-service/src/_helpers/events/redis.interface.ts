import * as Redis from "ioredis";

export interface RedisConnection {
  publisher: Redis.Redis;
  subscriber: Redis.Redis;
}
