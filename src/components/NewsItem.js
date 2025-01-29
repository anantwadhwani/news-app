import React from "react";

const NewsItem = (props) => {
        let { title, description, imgUrl, newsUrl, source, author, publishedAt } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-light text-bg-light" style={{ left: '50%' }}>
                        {source}
                    </span>
                    <img
                        src={imgUrl}
                        className="card-img-top"
                        style={{ height: 10 + "rem" }}
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">Published by {author} on {new Date(publishedAt).toUTCString()}</small></p>
                        <a
                            href={newsUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-sm btn-primary"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        );
}

export default NewsItem;
