'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import type LocomotiveScroll from 'locomotive-scroll';

const LocomotiveScrollContext = createContext<LocomotiveScroll | null>(null);

export const LocomotiveScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [scroll, setScroll] = useState<LocomotiveScroll | null>(null);

  useEffect(() => {
    let locomotiveScroll: LocomotiveScroll | null = null;

    const init = async () => {
      const LocomotiveScrollModule = await import('locomotive-scroll');
      const LocomotiveScroll = LocomotiveScrollModule.default;
      const scrollContainer = document.querySelector('[data-scroll-container]') as HTMLElement;

      if (!scrollContainer) return;

      locomotiveScroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        lerp: 0.05,
        multiplier: 0.5,
      });

      setScroll(locomotiveScroll);

      const resizeObserver = new ResizeObserver(() => {
        if (locomotiveScroll) {
          locomotiveScroll.update();
        }
      });
      resizeObserver.observe(scrollContainer);
    };

    init();

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
      setScroll(null);
    };
  }, [pathname]);

  return (
    <LocomotiveScrollContext.Provider value={scroll}>
      {children}
    </LocomotiveScrollContext.Provider>
  );
};

export const useLocomotiveScroll = () => useContext(LocomotiveScrollContext);