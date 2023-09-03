import React from 'react';
import Categories from '../components/Categories';
import Enterprise from '../components/Enterprise';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <div className='bg-[#F7FAFC]'>
            <Header />
            <Hero />
            <Categories />
            <Enterprise />
            <Footer />
        </div>
    );
};

export default Home;