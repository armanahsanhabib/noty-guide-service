import React from 'react';
import HeroBg from '../assets/images/hero-bg.png';

const Hero = () => {
    return (
        <div className='bg-[#eaf4fc] h-[450px] flex items-center'>
            <div className="container max-w-[1550px] w-[98%] mx-auto py-[25px] flex items-center">
                <div className="text">
                    <h1 className='text-[#000066] text-[32px] font-bold'>Noty - Votre guide de confiance pour les services et produits en Tunisie.</h1>
                </div>
                <div className="img">
                    <img className='' src={HeroBg} alt="Hero Image" />
                </div>
            </div>
        </div>
    );
};

export default Hero;