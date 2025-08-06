'use client'

import React from 'react';
import { useInView } from 'react-intersection-observer';


export function ClientCounter() {
  const [count, setCount] = React.useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
      <button onClick={() => setCount((count) => count + 1)}>
        Client Counter: {count}
      </button>
      <br />
      In View: {inView ? '1' : '0'}
    </div>
  )
}
