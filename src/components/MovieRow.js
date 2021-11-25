import React from 'react'

import './MovieRow.css'


export default ({ title, item }) => {
    return (
        <div>
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                {item.results.length() > 0 && item.results.map((item, key) => (
                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                ))}
            </div>
        </div>
    );
}