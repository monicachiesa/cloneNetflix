import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import './App.css'
import FeaturedMovie from './components/FeaturedMovie';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      // Pega a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      
    }
    loadAll();
  }, []);


  return (
    <div className="page">

      {featuredData && 
      <FeaturedMovie item={featuredData}/>
      }
      <section className="listas">
        {movieList.map((item, key) => (

          <MovieRow key={key} title={item.title} items={item.items} />

        ))}
      </section>
    </div>
  );
}