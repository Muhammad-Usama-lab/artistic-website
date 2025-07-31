
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const useLocomotiveScroll = (dependencies: any[] = []) => {
  const scrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    const scrollContainer = document.querySelector('[data-scroll-container]') as HTMLElement;

    if (!scrollContainer) {
      return;
    }

    scrollRef.current = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
    });

    const resizeObserver = new ResizeObserver(() => {
      if (scrollRef.current) {
        scrollRef.current.update();
      }
    });

    resizeObserver.observe(scrollContainer);

    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
      }
      resizeObserver.disconnect();
    };
  }, dependencies);
};

export default useLocomotiveScroll;
