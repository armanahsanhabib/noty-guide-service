import React from 'react';
import { BiUser } from 'react-icons/bi';
import LogoDark from '../../src/assets/images/logo dark.png';

const Header = () => {
    return (
        <div className='sticky top-0 left-0 w-full bg-[#eaf4fc]'>
            <div className="container max-w-[1550px] w-[98%] mx-auto py-[20px] flex justify-between items-center">
                <div className="left flex items-center gap-x-[30px]">
                    <div className="logo">
                        <img className='h-[35px]' src={LogoDark} alt="logo" />
                    </div>
                    <div className="nav">
                        <ul className='flex items-center gap-x-[25px] font-semibold text-[#02184a]'>
                            <li><a href="/">A propos de nous</a></li>
                            <li><a href="/">Categories</a></li>
                            <li><a href="/">Contactez-nous</a></li>
                        </ul>
                    </div>
                </div>
                <div className="right font-bold flex items-center">
                    <button className='flex items-center gap-x-1 py-[13px] px-[20px] text-[#2f3182]'><BiUser className='text-2xl' />Connexion</button>
                    <button className='flex items-center gap-x-1 py-[13px] px-[20px] bg-[#000066] rounded-full text-white'>Pour Entreprises</button>
                </div>
            </div>
        </div>
    );
};

export default Header;