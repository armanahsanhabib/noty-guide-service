import React, { useState } from 'react';
import Arrow1 from '../assets/images/Arrow 1.svg';
import HeroBg from '../assets/images/hero-bg.png';

const Hero = () => {
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    return (
        <div className='bg-[#eaf4fc] h-[650px] flex items-center rounded-b-[50px]'>
            <div
                className="container max-w-[1550px] w-[98%] mx-auto h-full flex items-center"
                style={{ backgroundImage: `url(${HeroBg})`, backgroundSize: "50%", backgroundPosition: "right bottom 40px", backgroundRepeat: "no-repeat" }}
            >
                <div className="txt flex flex-col justify-around gap-y-[100px] max-w-[60%]">
                    <div className="text">
                        <h1 className='text-[#000066] text-[48px] font-[700] leading-[58px] mb-[30px]'>Noty - Votre guide de confiance pour les services et produits en Tunisie.</h1>
                        <p className='text-[#667799] text-[24px] font-[600]'>Trouvez les meilleurs produits et services en un seul endroit.</p>
                    </div>
                    <div className="search flex gap-x-5">
                        <div className="relative">
                            <input
                                className='px-[22px] py-[20px] rounded-full w-[456px] bg-transparent outline-none text-[13px] font-[500] text-[#667799] focus:shadow-[0px_1px_3px_1px_#00006650] transition-all'
                                style={{ border: "2px solid #006" }}
                                type="text"
                                name="search"
                                id="search"
                                placeholder='Recherchez un établissement... (Boutiques, Restaurants, etc.)'
                                onSelect={() => setIsSearchFocused(true)}
                                onBlur={() => setIsSearchFocused(false)}
                            />
                            {isSearchFocused &&
                                <button
                                    className='absolute right-[6px] top-[50%] -translate-y-[50%] bg-[#DAE4FF] rounded-full px-[20px] py-[15px] text-[15px] text-[#000099] font-[600] transition-all'
                                >
                                    Rechercher
                                </button>
                            }
                        </div>
                        <button
                            style={{ background: "linear-gradient(94deg, #003 0%, #006 50.52%, #009 100%)" }}
                            className='rounded-full px-[26px] py-[20px] text-[16px] font-[600] text-[#FFFFFF] flex items-center gap-x-[12px]'
                        >Laissez votre avis <img src={Arrow1} alt="arrow icon" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;