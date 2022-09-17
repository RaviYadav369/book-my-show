import axios from 'axios';
import React,{useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Movielayout from '../layout/Movie-layout'

function Moviepage() {
  const { id } = useParams();

  const [cast, setcast] = useState();

  useEffect(() => {
    const requestCast = async () =>{
      const getCast = await axios.get('/movies/${id}/credits');
      setcast(getCast.data.cast)
    } 
  requestCast();
  }, [id]);
  const [similarMovies,setsimilarMovies] =useState();
  useEffect(() => {
    const requestSimillarMovies = async () =>{
      const getSimillarMovies = await axios.get('/movies/${id}/credits');
      setcast(getSimillarMovies.data.cast)
    } 
  requestSimillarMovies();
  }, [id]);
  

  return (
    <>
   <div>Movies - details</div>
    </>
  )
}

export default Movielayout(Moviepage)