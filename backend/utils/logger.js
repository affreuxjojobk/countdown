// backend/utils/logger.js

const { createLogger, transports, format } = require('winston');
const { combine, timestamp, printf, splat } = format;

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    splat(), // permet d’interpoler des metadata
    printf(({ timestamp, level, message, ...meta }) => {
      const metaStr = Object.keys(meta).length
        ? ` ${JSON.stringify(meta)}`
        : '';
      return `${timestamp} [${level.toUpperCase()}] ${message}${metaStr}`;
    })
  ),
  transports: [
    // Affiche tout dans la console
    new transports.Console(),
    // Écrit uniquement les erreurs dans un fichier séparé
    new transports.File({
      filename: 'logs/error.log',
      level: 'error'
    })
	 new transports.File({ filename: 'logs/warnings.log', level: 'info' }),
  ]
});

module.exports = logger;

