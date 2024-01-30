"use client";

import { useEffect, useState } from "react";
import { useFetchNews } from "../hooks/use-fetch-news";
import Image from "next/image";

import NoImage from "@/app/assets/images/no-image.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

type Article = {
    title: string;
    description: string;
    urlToImage: string;
    content: string;
    url: string;
}

const defaultArticle: Article = {} as Article;

const Dashboard = () => {
    const [articles, setArticles] = useState<Array<Article>>([]);
    const [totalArticles, setTotalArticles] = useState<number>();
    const [selectedArticle, setSelectedArticle] = useState<Article>(defaultArticle);

    const { isLoading, isSuccess, isError, news, fetchNewsData } = useFetchNews();

    const [page, setPage] = useState(1);

    const { title, description, urlToImage, content, url } = selectedArticle;

    useEffect(() => {
        fetchNewsData(page.toString());
    }, [])

    useEffect(() => {
        if(isSuccess && !isLoading && news){            
           const { data: { articles, totalResults } } = news;
           console.log(articles);
                   
            setTotalArticles(totalResults);
            setArticles(articles);
            setSelectedArticle(articles[0])
        }

    }, [isSuccess, isLoading, news])

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [selectedArticle])

    const redirectToNews = (article: any) => {
        setSelectedArticle(article)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    {articles.map((article) => {
                        const { urlToImage, title } = article;
                        return <div onClick={() => redirectToNews(article)} key={title} style={{
                            border: '1px solid #ddd',
                            padding: '10px',
                            margin: '10px',
                            cursor: 'pointer',
                            borderRadius: '5px',
                          }}>
                            <span>
                                <Image src={urlToImage || NoImage} alt={urlToImage || ""} width={50} height={50} unoptimized/>
                            </span>
                            <span>
                                <span>{title}</span>
                            </span>
                        </div>
                    })}
                </div>
                <div className="col-md-8">
                    <h1>{title}</h1>
                    <h5>{description}</h5>
                    <Image src={urlToImage} alt={urlToImage || ""} width={1000} height={300} unoptimized/>
                    <div>
                        {content}
                    </div>
                    <div>
                        <a href={url} target="_blank">View Full News</a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Dashboard;
