import React from 'react'
import './NewsDetail.css'
interface NewsDetailProps {
    news: News
}
export const NewsDetailComponent: React.FC<NewsDetailProps> = ({ news }) => {
    return (
        <div className="row">
            <div className="col-lg-8">
                <div className="row no-gutters">
                    <div className="col-lg-4 bg-light wrap">
                        <h3>
                            {news.title}/{news.subtitle}
                        </h3>
                        <p>
                            {news.description}
                        </p></div>
                    <div className="col-lg-8">
                        <img className="newsImage" src={news.image} alt="image" />
                    </div>
                </div>
            </div>
            <div className="col-lg-4  ">
                <img className="header_image" src={news.image} alt="image" />
                <div className="px-0 bg-light wrap">
                    <h3>
                        {news.title}/{news.subtitle}
                    </h3>
                    <p>
                        {news.description}dfadsfasdfasdfasdfadfadfadsfasdf
                    </p>
                </div>

            </div>
        </div>

    )
}
