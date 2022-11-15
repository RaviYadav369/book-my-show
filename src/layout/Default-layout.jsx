import React from 'react'
import DefaultFooter from '../components/footer/Default-Footer';
import NavbarComponent from '../components/Navbar/Navbar-Component';

const Defaultlayout =(Component) =>
({ ...props }) => {
  return (
    <div>
      <NavbarComponent />
      <Component {...props} />
      <DefaultFooter />
    </div>
  )
};

export default Defaultlayout