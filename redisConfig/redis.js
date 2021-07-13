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
        return new Promise((resolve, reject) => {
            this.redisClient.get(username, (err, data) => {
                if (err) return reject(err);
                console.log("from redis",data)
                return resolve(data);
            });
        });

    }

    setCache(username,repos) {
        this.redisClient.set(username, repos, (err,data) =>{
            if (err) return err
            console.log("Storing into Cache: ",data)
        });
    }
}

module.exports = () => new Redis();