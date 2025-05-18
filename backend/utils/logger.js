// backend/utils/logger.js

const { createLogger, transports, format } = require('winston');
const { combine, timestamp, printf } = format;

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    printf(({ timestamp, level, message }) =>
      `${timestamp} [${level.toUpperCase()}] ${message}`
    )
  ),
  transports: [
    // Affiche tout dans la console
    new transports.Console(),
    // Écrit uniquement les erreurs dans un fichier séparé
    new transports.File({
      filename: 'logs/error.log',
      level: 'error'
    })
  ]
});

module.exports = logger;
