import { SearchResult, Image } from "./type";
import { useFetch } from "@raycast/utils";

const createLgtmoonFetcher =
  (endpoint: string) => (): { isLoading: boolean; data: Image[]; revalidate: () => void } => {
    const { isLoading, data, revalidate } = useFetch(`https://lgtmoon.dev/api/images/${endpoint}`, {
      mapResult(result: SearchResult) {
        return {
          data: result.images,
        };
      },
      initialData: [],
    });

    return { isLoading, data, revalidate };
  };

export const useFetchLgtmoonRecent = createLgtmoonFetcher("recent");
export const useFetchLgtmoonRandom = createLgtmoonFetcher("random");
