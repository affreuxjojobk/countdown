// backend/utils/logger.js

const { createLogger, transports, format } = require('winston');
const { combine, timestamp, printf, splat } = format;

// Assure-toi que le dossier 'logs' existe : mkdir -p backend/logs

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
    // Écrit tout à partir de 'info' dans un fichier combined.log
    new transports.File({ filename: 'logs/combined.log', level: 'info' }),
    // Écrit uniquement les erreurs dans error.log
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    // Écrit les warnings et les infos dans warnings.log si besoin
    new transports.File({ filename: 'logs/warnings.log', level: 'warn' })
  ]
});

module.exports = logger;

