import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

const News = (props) => {
    const { country, category, apiKey, pageSize, setProgress } = props;
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string) => {
        return (string.slice(0, 1).toUpperCase()
            + string.slice(1));
    }

    const updateNews = () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
        fetch(url).then((data) => {
            setProgress(30);
            return data.json()
        }).then((parsedData) => {
            setProgress(60);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        setProgress(100);
        });
    }

    useEffect(() => {
        updateNews();
        document.title = `NewsApp - ${capitalizeFirstLetter(category)} Headlines`;
        //eslint-disable-next-line
    }, []);

    const fetchMoreData = async () => {
        setPage(page + 1);
        const url = `https://newsapi.org/v2/top-headlines?country=${country
            }&category=${category}&apiKey=${apiKey}&page=${page + 1
            }&pageSize=${pageSize}`;
        fetch(url)
            .then((data) => data.json())
            .then((parsedData) => {
                setArticles(articles.concat(parsedData.articles));
                setTotalResults(parsedData.totalResults);
                setLoading(false);
            });
    };

    return (
        <>
            <h1 className="text-center" style={{marginTop: '5rem'}}>
                {capitalizeFirstLetter(category)}{" "}
                Headlines
            </h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length} //This is important field to render the next data
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container my-3">
                    <div className="row">
                        {articles.map((article) => {
                            return (
                                <div className="col-md-3">
                                    <NewsItem
                                        key={article.url}
                                        title={article.title}
                                        description={article.description}
                                        imgUrl={article.urlToImage}
                                        newsUrl={article.url}
                                        source={article.source.name}
                                        author={article.author}
                                        publishedAt={article.publishedAt}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
}


News.defaultProps = {
    country: "in",
    category: "general",
    pageSize: 8,
};

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
};

export default News;
