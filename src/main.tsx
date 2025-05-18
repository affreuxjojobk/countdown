import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import * as Sentry from '@sentry/react';
import App from './App';
import './index.css';
import ErrorFallback from './components/ErrorFallback';

// Initialisation de Sentry
Sentry.init({
  dsn: 'https://8a727937cd3b972808a4e43f87086043@o4509332799553536.ingest.de.sentry.io/4509332813447248',
  integrations: [
    new Sentry.BrowserTracing(), // Déjà inclus dans @sentry/react
    new Sentry.Replay(),         // Pour le session replay
  ],
  // Tracing de performance
  tracesSampleRate: 1.0,
  // Replays de sessions
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  // Inclure infos utilisateur si disponibles
  sendDefaultPii: true,
});

// Création du composant Sentry avec fallback en cas d'erreur
const SentryApp = Sentry.withErrorBoundary(App, {
  fallback: (errorProps) => <ErrorFallback error={errorProps.error} />,
});

// Point d'entrée de l'application
const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <SentryApp />
  </StrictMode>
);
