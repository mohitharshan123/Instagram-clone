import { useQuery } from "@tanstack/react-query";

import { fetchPosts, fetchSearchImages } from "@api/posts";
import { DEFAULT_STALE_TIME, QUERY_KEYS } from "@constants/query";

const useFetchPosts = () =>
  useQuery<any>({
    queryKey: [QUERY_KEYS.posts],
    queryFn: fetchPosts,
    staleTime: DEFAULT_STALE_TIME,
  });

const useFetchSearchImages = () =>
  useQuery<any>({
    queryKey: [QUERY_KEYS.searchImages],
    queryFn: fetchSearchImages,
    staleTime: DEFAULT_STALE_TIME,
  });

export { useFetchPosts, useFetchSearchImages };
