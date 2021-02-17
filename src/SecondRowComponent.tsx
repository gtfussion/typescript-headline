import React from 'react'
interface NewsDetailProps {
    news: News
}
export const SecondRowComponent: React.FC<NewsDetailProps> = ({ news }) => {
    return (
        <div className="row ">
            <div className="col-lg-8">
                <div className='row'>
                    <div className="col-lg-8 wrap">
                        <img className="newsImage" src={news.image} alt="image" />
                        <h3>
                            {news.title}
                        </h3>
                        <p >
                            {news.description}/{news.subtitle}
                        </p></div>
                    <div className="col-lg-4 wrap">
                        <img className="newsImage" src={news.image} alt="image" />
                        <h3>
                            {news.title}/{news.subtitle}
                        </h3>
                        <p>
                            {news.description}
                        </p>
                    </div>
                </div>

            </div>
            <div className="col-lg-4 bg-light wrap">
                <h3>
                    {news.title}/{news.subtitle}
                </h3>
                <hr />
                <h3>
                    {news.title}/{news.subtitle}
                </h3>
                <hr />
                <h3>
                    {news.title}/{news.subtitle}
                </h3>
            </div>
        </div>
    )
}
