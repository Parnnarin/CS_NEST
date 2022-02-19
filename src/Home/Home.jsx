import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Featured from '../components/Featured/Featured'
import "./home.scss"
import List from '../components/List/List'


const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <Featured/>
            <List/>
            <List/>
            <List/>
            <List/>
            
        </div>
    )
}

export default Home
