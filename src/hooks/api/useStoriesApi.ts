import { useQuery } from "@tanstack/react-query";

import { fetchStories } from "@api/stories";
import { DEFAULT_STALE_TIME, QUERY_KEYS } from "@constants/query";

const useFetchStories = () =>
  useQuery<any>({
    queryKey: [QUERY_KEYS.stories],
    queryFn: fetchStories,
    staleTime: DEFAULT_STALE_TIME,
  });

export { useFetchStories };
