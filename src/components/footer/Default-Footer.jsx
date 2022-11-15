import React from 'react'
import { Link } from 'react-router-dom'
import { MdContactPhone } from 'react-icons/md'
import { GiTicket } from 'react-icons/gi'
import {  FiMail } from 'react-icons/fi'

function FooterSm() {
  return <>
    <div className='grid md:hidden grid-cols-3 gap-2'>
      <div className='pt-4 pl-4 m-2 text-red-500'>
        <Link to='/' >Home</Link>
      </div>
      <div className='pt-4 pl-4 m-2 text-red-500'>
        <Link to='/' >Buzz</Link>
      </div>
      <div className='pt-4 pl-4 m-2 text-red-500'>
        <Link to='/' >Profile</Link>
      </div>
    </div>
  </>
}

function FooterLg() {
  return (
    <>
      <div className='bg-gray-700 p-3'>
        <div className='hidden md:block w-4/5 m-auto '>
          <div className='flex'>
            <div className='bg-gray-700 border-gray-900 w-full p-6'>
              <div className='flex justify-between w-full'>
                <p className='text-white p-2'><strong>List Your Show</strong> Get a show, events, activity or a great experiances?. Partner with us & Get listed on BookMyShow</p>
                <button className='bg-red-500 text-white p-2'>Contact Today</button>
              </div>
            </div>
          </div>
          <div className='bg-gray-600  w-full'>
            <div className='flex justify-around'>
              <div className='p-2 flex flex-col text-white opacity-60 hover:opacity-95'>
                <div className='text-8xl m-auto'>
                  <MdContactPhone />
                </div>
                <div className='text-center'>
                  <p className='text-sm'>24/7 CUSTOMER CARE</p>
                </div>
              </div>
              <div className='p-2 flex flex-col text-white opacity-60 hover:opacity-100'>
                <div className='text-8xl m-auto'>
                  <GiTicket />
                </div>
                <div className='text-center'>
                  <p className='text-sm'>RESEND BOOK CONFORMATION</p>
                </div>
              </div>
              <div className='p-2 flex flex-col text-white opacity-60 hover:opacity-100'>
                <div className='text-8xl m-auto'>
                  <FiMail />
                </div>
                <div className='text-center'>
                  <p className='text-sm'>SUSCRIBE TO THE NEWSLETTER</p>
                </div>
              </div>
            </div>
          </div>
          <div className='text-white'>
            <div className='pt-5'>
              <h4>Countries</h4>
              <div className='flex'>
                <p className='p-2 text-gray-400 border-r-2 text-sm hover:text-white'>INDINESIA</p>
                <p className='p-2 text-gray-400 border-r-2 text-sm hover:text-white'>SINGAPORE</p>
                <p className='p-2 text-gray-400 border-r-2 text-sm hover:text-white'>UAE</p>
                <p className='p-2 text-gray-400 border-r-2 text-sm hover:text-white'>SRI LANKA</p>
                <p className='p-2 text-gray-400 border-r-2 text-sm hover:text-white'>WEST INDIES</p>
              </div>
            </div>
          </div>
          <div className='text-white'>
            <div className='pt-5'>
              <h4>HELP</h4>
              <div className='flex'>
                <p className='p-2 text-gray-400 border-r-2 text-sm hover:text-white'>ABOUT US</p>
                <p className='p-2 text-gray-400 border-r-2 text-sm hover:text-white'>CONTACT US</p>
                <p className='p-2 text-gray-400 border-r-2 text-sm hover:text-white'>CURRENT OPENING</p>
                <p className='p-2 text-gray-400 border-r-2 text-sm hover:text-white'>PRESS RELEASE</p>
                <p className='p-2 text-gray-400 border-r-2 text-sm hover:text-white'>PRESS COVERAGE </p>
                <p className='p-2 text-gray-400 border-r-2 text-sm hover:text-white'>TERMS & CONDITION </p>
                <p className='p-2 text-gray-400 border-r-2 text-sm hover:text-white'>PRIVATE POLICY </p>
                <p className='p-2 text-gray-400 border-r-2 text-sm hover:text-white'>FAQ </p>
                <p className='p-2 text-gray-400 border-r-2 text-sm hover:text-white'>SITEMAP </p>
              </div>
            </div>
          </div>
          <div className='text-white'>
            <div className='pt-5'>
              <h4>BOOKMYSHOW EXCLUSIVE</h4>
              <div className='flex'>
                <p className='p-2 text-gray-400 border-r-2 text-sm hover:text-white'>WATCH GUIDE</p>
                <p className='p-2 text-gray-400 border-r-2 text-sm hover:text-white'>SUPERSTAR</p>
                <p className='p-2 text-gray-400 border-r-2 text-sm hover:text-white'>BOOK A SMILE</p>
                <p className='p-2 text-gray-400 border-r-2 text-sm hover:text-white'>CO-OPERATE VOUCHERS</p>
                <p className='p-2 text-gray-400 border-r-2 text-sm hover:text-white'>GIFT CARDS</p>
                <p className='p-2 text-gray-400 border-r-2 text-sm hover:text-white'>LIST MY SHOW</p>
                <p className='p-2 text-gray-400 border-r-2 text-sm hover:text-white'>OFFERS</p>
                <p className='p-2 text-gray-400 border-r-2 text-sm hover:text-white'>STREAMS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const DefaultFooter = () => {
  return (
    <>
      <div className='sticky w-full '>
        <FooterSm />
        <FooterLg />
      </div>
    </>
  )
}

export default DefaultFooter