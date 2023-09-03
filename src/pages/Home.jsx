import React from 'react';
import Categories from '../components/Categories';
import Enterprise from '../components/Enterprise';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <div className='bg-[#F7FAFC]'>
            <Hero />
            <Categories />
            <Enterprise />
        </div>
    );
};

export default Home;