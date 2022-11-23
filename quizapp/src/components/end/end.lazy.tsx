import React, { lazy, Suspense } from 'react';

const LazyEnd = lazy(() => import('./End'));

const End = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyEnd {...props} />
  </Suspense>
);

export default End;
