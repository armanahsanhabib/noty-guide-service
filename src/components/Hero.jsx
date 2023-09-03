import React from 'react';
import Arrow1 from '../assets/images/Arrow 1.svg';
import HeroBg from '../assets/images/hero-bg.png';

const Hero = () => {
    return (
        <div className='bg-[#eaf4fc] h-[650px] flex items-center rounded-b-[50px]'>
            <div className="container max-w-[1550px] w-[98%] mx-auto flex">
                <div className="left flex flex-col justify-around">
                    <div className="text">
                        <h1 className='text-[#000066] text-[48px] font-[700] leading-[58px] mb-[25px]'>Noty - Votre guide de confiance pour les services et produits en Tunisie.</h1>
                        <p className='text-[#667799] font-[24px] font-[600]'>Trouvez les meilleurs produits et services en un seul endroit.</p>
                    </div>
                    <div className="search flex gap-x-5">
                        <input
                            className='px-[22px] py-[20px] rounded-full w-[456px] bg-transparent border-[2px] border-[#000066] text-[13px] font-[500] text-[#667799]'
                            type="text"
                            name="search"
                            id="search"
                            placeholder='Recherchez un établissement... (Boutiques, Restaurants, etc.)'
                        />
                        <button
                            style={{ background: "linear-gradient(94deg, #003 0%, #006 50.52%, #009 100%)" }}
                            className='rounded-full px-[26px] py-[20px] text-[16px] font-[600] text-[#FFFFFF] flex items-center gap-x-[12px]'
                        >Laissez votre avis <img src={Arrow1} alt="arrow icon" /></button>
                    </div>
                </div>
                <div className="right">
                    <img className='' src={HeroBg} alt="Hero Image" />
                </div>
            </div>
        </div>
    );
};

export default Hero;