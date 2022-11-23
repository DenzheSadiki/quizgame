import React, { lazy, Suspense } from 'react';

const LazyHighscores = lazy(() => import('./Highscores'));

const Highscores = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyHighscores {...props} />
  </Suspense>
);

export default Highscores;
