import { FactoryProvider } from '@nestjs/common';
import { Redis } from 'ioredis';
import { redisConstants } from 'src/constants/redis.constant';

export const redisClientFactory: FactoryProvider<Redis> = {
    provide: 'RedisClient',
    useFactory: () => {
        const redisInstance = new Redis({
            host: redisConstants.host,
            port: redisConstants.port,
        });
        redisInstance.on('error', e => {
            throw new Error(`Redis connection failed: ${e}`);
        });
        return redisInstance;
    }
};