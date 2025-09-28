import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import React, { useState } from 'react'



const Home = () => {

    const[category,setCategory]= useState("ALL");
  return (
    <div>
         <Header/>
         <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home