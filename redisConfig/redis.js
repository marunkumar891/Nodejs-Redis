const redis = require('redis');


class Redis {
    constructor() {
        this.redisClient = redis.createClient({
            port: process.env.REDIS_PORT.port,
            host: process.env.REDIS_URL,
            no_ready_check: true,
        });

        this.redisClient.on('error', (err) => {
            console.log('Redis: Something went wrong ', err);
            process.exit(1);

        });
        console.log("Connected to Redis")
    }

    getCache(username) {
        this.redisClient.get(username, (err, data) => {
            if (err) return err;
            return data;
        });
    }

    setCache(username,repos) {
        this.redisClient.setex(username, 3600, repos);
    }
}

module.exports = () => new Redis();