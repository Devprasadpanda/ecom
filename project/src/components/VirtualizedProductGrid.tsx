import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { Product } from '../types';
import { useVirtualScroll } from '../hooks/useVirtualScroll';

interface VirtualizedProductGridProps {
  products: Product[];
  containerHeight: number;
  itemsPerRow: number;
  itemHeight: number;
}

const VirtualizedProductGrid: React.FC<VirtualizedProductGridProps> = ({
  products,
  containerHeight,
  itemsPerRow,
  itemHeight
}) => {
  // Group products into rows
  const productRows = useMemo(() => {
    const rows: Product[][] = [];
    for (let i = 0; i < products.length; i += itemsPerRow) {
      rows.push(products.slice(i, i + itemsPerRow));
    }
    return rows;
  }, [products, itemsPerRow]);

  const {
    visibleItems: visibleRows,
    totalHeight,
    offsetY,
    handleScroll
  } = useVirtualScroll({
    items: productRows,
    itemHeight,
    containerHeight,
    overscan: 2
  });

  return (
    <div
      className="overflow-auto"
      style={{ height: containerHeight }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div
          style={{
            transform: `translateY(${offsetY}px)`,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0
          }}
        >
          {visibleRows.map((row, rowIndex) => (
            <div
              key={`row-${row.index || rowIndex}`}
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${itemsPerRow} gap-6 mb-6`}
              style={{ height: itemHeight }}
            >
              {row.map((product, productIndex) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: productIndex * 0.05 
                  }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualizedProductGrid;