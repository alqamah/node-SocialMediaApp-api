import winston from 'winston';
import fs from 'fs';

const logger = winston.createLogger({
    level:'info',
    format: winston.format.json(),
    defaultMeta:{service:'request-logging'},
    transports:[
        new winston.transports.File({filename: './log/info.log'})
    ]
});

const loggerMiddleware = async (req, res, next) => {
    console.log('logger middleware');
    if(req.url.includes('user')){
        console.log('user middleware');
        next();
    }
    const logData = `${new Date().toTimeString()}: ${req.url} - ${JSON.stringify(req.body)}\n`;
    logger.info(logData);
    console.log(logData);
    next();
}


export default loggerMiddleware;