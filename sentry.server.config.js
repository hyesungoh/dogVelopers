import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn:
    SENTRY_DSN ||
    'https://f304fbf670114360b445368f05083f84@o1127175.ingest.sentry.io/6168846',

  tracesSampleRate: 1.0,
});
