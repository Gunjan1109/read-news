import { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchNews } from "../api/news";

export const useFetchNews = () => {
    const [page, setPage] = useState<string>("");    
   
    const { isLoading, isSuccess, isError, data: news } = useQuery(["fetch-memes", page], async () => {
      if(!page){
        return;
      }
        return fetchNews(page)
    }, {
        retry: false,
        refetchOnWindowFocus: false,
        cacheTime: 0,
      })

    const fetchNewsData = useCallback((page: string) => {
        setPage(page);
      }, []);

      return {
        isLoading, isSuccess, isError, news, fetchNewsData
      }
}