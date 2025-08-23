import { useState, useEffect, useCallback } from 'react';
import { throttle } from '../utils/performance';

interface UseVirtualScrollProps {
  items: any[];
  itemHeight: number;
  containerHeight: number;
  overscan?: number;
}

export const useVirtualScroll = ({
  items,
  itemHeight,
  containerHeight,
  overscan = 5
}: UseVirtualScrollProps) => {
  const [scrollTop, setScrollTop] = useState(0);

  const totalHeight = items.length * itemHeight;
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  const endIndex = Math.min(
    items.length - 1,
    Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
  );

  const visibleItems = items.slice(startIndex, endIndex + 1).map((item, index) => ({
    ...item,
    index: startIndex + index
  }));

  const offsetY = startIndex * itemHeight;

  const handleScroll = useCallback(
    throttle((e: Event) => {
      const target = e.target as HTMLElement;
      setScrollTop(target.scrollTop);
    }, 16), // ~60fps
    []
  );

  return {
    visibleItems,
    totalHeight,
    offsetY,
    handleScroll
  };
};