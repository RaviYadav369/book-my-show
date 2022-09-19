import React from 'react';
import MovieNavbarComponent from '../components/Navbar/MovieNavbar-Component';


const Movielayout = (Component) =>
({ ...props }) => {

  return (
    <div>
      <MovieNavbarComponent />
      <Component {...props} />
      <div>Footer</div>
    </div>
  );
};
export default Movielayout