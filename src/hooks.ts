import { SearchResult, Image } from "./type";
import { useFetch } from "@raycast/utils";

export const useFetchLgtmoonRecent = (): { isLoading: boolean; data: Image[]; revalidate: () => void } => {
  const { isLoading, data, revalidate } = useFetch("https://lgtmoon.dev/api/images/recent", {
    mapResult(result: SearchResult) {
      return {
        data: result.images,
      };
    },
    initialData: [],
  });

  return { isLoading, data, revalidate };
};

export const useFetchLgtmoonRandom = (): { isLoading: boolean; data: Image[]; revalidate: () => void } => {
  const { isLoading, data, revalidate } = useFetch("https://lgtmoon.dev/api/images/random", {
    mapResult(result: SearchResult) {
      return {
        data: result.images,
      };
    },
    initialData: [],
  });

  return { isLoading, data, revalidate };
};
