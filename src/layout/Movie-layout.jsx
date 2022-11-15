import React from 'react';
import MovieFooter from '../components/footer/Movie-Footer';
import MovieNavbarComponent from '../components/Navbar/MovieNavbar-Component';


const Movielayout = (Component) =>
  ({ ...props }) => {

    return (
      <div>
        <MovieNavbarComponent />
        <Component {...props} />
        <MovieFooter />
      </div>
    )
  };
export default Movielayout