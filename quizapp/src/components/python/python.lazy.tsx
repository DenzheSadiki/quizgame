import React, { lazy, Suspense } from 'react';

const LazyPython = lazy(() => import('./Python'));

const Python = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPython {...props} />
  </Suspense>
);

export default Python;
