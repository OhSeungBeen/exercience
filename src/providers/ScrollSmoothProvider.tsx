'use client';

import { type ReactNode, useEffect, useRef } from 'react';
import gsap from 'gsap';
import type Lenis from '@studio-freight/lenis/types';
import { ReactLenis } from '@studio-freight/react-lenis';

type LenisRef = {
  wrapper?: HTMLElement;
  content?: HTMLElement;
  lenis?: Lenis;
};

type Props = {
  children: ReactNode;
};

export default function ScrollSmoothProvider({ children }: Props) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  return (
    <ReactLenis
      ref={lenisRef}
      autoRaf={false}
      root
      options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
    >
      {children}
    </ReactLenis>
  );
}
