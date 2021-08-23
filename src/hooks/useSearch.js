import { useState } from 'react';

function useSearch(params) {
  const [searchParam] = useState(params);

  const search = (query, items) =>
    items.filter((item) =>
      searchParam.some(
        (newItem) => item[newItem].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );

  return {
    search,
  };
}

export default useSearch;
