import React from 'react';
import LogoDark from '../../src/assets/images/logo dark.png';
import UserIcon from '../assets/images/user icon.svg';

const Header = () => {
    return (
        <div className='fixed top-0 left-0 w-full bg-[#eaf4fc]'>
            <div className="container max-w-[1550px] w-[98%] mx-auto py-[20px] flex justify-between items-center">
                <div className="left flex items-center gap-x-[30px]">
                    <div className="logo">
                        <img className='h-[38px]' src={LogoDark} alt="logo" />
                    </div>
                    <div className="nav">
                        <ul className='flex items-center gap-x-[25px] font-[500] text-[15px] text-[#000]'>
                            <li><a href="/">À propos de nous</a></li>
                            <li><a href="/">Catégories</a></li>
                            <li><a href="/">Contactez-nous</a></li>
                        </ul>
                    </div>
                </div>
                <div className="right font-[600] text-[15px] flex items-center gap-x-[25px]">
                    <button className='flex items-center gap-x-2 text-[#006]'>
                        <img src={UserIcon} alt="user icon" />
                        Connexion
                    </button>
                    <button className='py-[13px] px-[20px] bg-[#000066] rounded-full text-white'>Pour Entreprises</button>
                </div>
            </div>
        </div>
    );
};

export default Header;