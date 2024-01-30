import axios from "axios";
import { NEXT_PUBLIC_NEWS_API_KEY } from "../secrets";
import { BASE_NEWS_URL } from "../constants";

const options = {
    method: 'GET',
  headers: {
    Authorization: `Bearer ${NEXT_PUBLIC_NEWS_API_KEY}`
  }
}

export const fetchNews = (page: string) => axios(BASE_NEWS_URL.replace(":page", page), options).then((response) => response)
