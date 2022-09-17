import React from 'react'
import { Link } from 'react-router-dom';

const PosterComponent = (props) => {
  return (
    <Link to={`./movie/${props.id}`} >
      <div className='w-full flex flex-col items-start gap-2 px-2 md:px-3'>
        <div className='w-full h-40 md:h-80'>
          <img src={`https://images.tmdb.org/t/p/original${props.poster_path}`} alt='poster' className='w-full h-full rounded-md' />
        </div>
        <h3 className={`text-lg font-bold ${props.isDark ? 'text-white' : 'text-black'}`}>{props.title}</h3>
        {/* <p className={`text-lg font-bold ${props.isDark ? 'text-white' : 'text-gray-700'}`}>{props.subtitle}</p> */}
      </div>
    </Link>
  );
}

export default PosterComponent;