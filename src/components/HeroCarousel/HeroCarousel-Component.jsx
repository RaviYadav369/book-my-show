import React,{useState} from 'react';
import HeroSlider from 'react-slick';
import { NextArrow,PrevArrow } from './Arrows-Component';


function HeroCarouselComponent() {

const [images, setimages] = useState([]);
const settingsm ={
arrow:true,
slideToShow :1,
infinite :true,
nextArrow : <NextArrow />,
prevArrow :<PrevArrow /> ,


}
const settingLg ={
  arrow :true,
  slideToShow :1,
  infinite :true,
  speed :500,
  nextArrow : <NextArrow />,
  prevArrow :<PrevArrow /> ,



}

  return (
    <>
    <div className='lg-hidden'>
      <HeroSlider {...settingsm}>
        {
          images.map((images) => (
            <div className='w-full h-96 md:h-80 py-3 px-2'>
              <img src='' alt='Hero Banner' className='w-full h-full rounded-md object-center'/>
            </div>
          ))
        }
      </HeroSlider>
    </div>
    <div className='hidden lg:block'>
      <HeroSlider  {...settingLg}>

      </HeroSlider>
    </div>
    </>
  )
}

export default HeroCarouselComponent