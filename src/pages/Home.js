import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRoom from '../components/FeaturedRoom';
import Button from '../components/StyledHero';
const Home = () => {
    return (
        <>
       <Hero hero="defaultHero">
           <Banner title="luxurious rooms" subtitle="deluxe rooms starting @999">
           <Link to="/rooms" className="btn-primary">
               our rooms
           </Link>
           </Banner>
       </Hero>
       <Services/>
       <FeaturedRoom/>
       
       </>
    )
}


export default Home;
