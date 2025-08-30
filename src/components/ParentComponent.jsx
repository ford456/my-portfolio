'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import FancyLoading from './FancyLoading';

// ใช้ dynamic import พร้อม suspense
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  suspense: true,
});

export default function ParentComponent() {
  return (
    <div className="p-6 space-y-4 bg-gray-50 rounded-xl shadow">
      <h2 className="text-xl font-semibold">🎯 Parent Component</h2>

      <Suspense fallback={<FancyLoading />}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}
