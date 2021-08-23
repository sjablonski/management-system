import { useMemo, useState } from 'react';

function useSortableData(items, config = null) {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    const sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (Date.parse(a[sortConfig.key]) && Date.parse(b[sortConfig.key])) {
          if (new Date(a[sortConfig.key]).getTime() < new Date(b[sortConfig.key]).getTime()) {
            return sortConfig.direction === 'ASC' ? -1 : 1;
          }
          if (new Date(a[sortConfig.key]).getTime() > new Date(b[sortConfig.key]).getTime()) {
            return sortConfig.direction === 'ASC' ? 1 : -1;
          }
          return 0;
        }

        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ASC' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ASC' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ASC';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ASC') {
      direction = 'DESC';
    }
    setSortConfig({
      key,
      direction,
    });
  };

  return {
    items: sortedItems,
    requestSort,
    sortConfig,
  };
}

export default useSortableData;
