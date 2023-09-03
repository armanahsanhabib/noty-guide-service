import React from 'react';
import FooterBottomImg from '../assets/images/Yuniqode white png 1.svg';
import fab from '../assets/images/fab.svg';
import insta from '../assets/images/insta.svg';
import LogoLight from '../assets/images/logo light.png';
import tik from '../assets/images/tik.svg';
import twi from '../assets/images/twi.svg';

const Footer = () => {
    return (
        <div className='footer bg-[#000033] flex items-center font-[roboto]'>
            <div className="container max-w-[1550px] w-[98%] mx-auto">
                <div className="top pt-[84px] pb-[60px] grid grid-cols-2 text-[#ffffff]">
                    <div className="left max-w-[350px]">
                        <img className='h-[76px] mb-[10px]' src={LogoLight} alt="logo" />
                        <p className='text-[14px] font-[500]'>Construisant des ponts entre les consommateurs et les entreprises pour une meilleure expérience de consommation en Tunisie.</p>
                    </div>
                    <div className="right flex justify-between">
                        <div className="col">
                            <h3 className='text-[28px] font-[500] mb-[33px]'>Noty</h3>
                            <ul className='text-[#D0D0D0] text-[16px] flex flex-col gap-y-[13px]'>
                                <li><a href="/">Notre mission</a></li>
                                <li><a href="/">Carrières</a></li>
                                <li><a href="/">Nous contacter</a></li>
                                <li><a href="/">Guide d’utilisation</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3 className='text-[28px] font-[500] mb-[33px]'>Entreprises</h3>
                            <ul className='text-[#D0D0D0] text-[16px] flex flex-col gap-y-[13px]'>
                                <li><a href="/">Pourquoi Noty?</a></li>
                                <li><a href="/">Plans & tarifs</a></li>
                                <li><a href="/">Espace Entreprise</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3 className='text-[28px] font-[500] mb-[33px]'>Légal</h3>
                            <ul className='text-[#D0D0D0] text-[16px] flex flex-col gap-y-[13px]'>
                                <li><a href="/">Conditions d'utilisation</a></li>
                                <li><a href="/">Politique de confidentialité</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="bottom text-[#FFFFFF] py-[21px] flex justify-between items-center">
                    <div className="left flex items-center">
                        <span className='text-[16px] font-[500]'>&copy; 2023 Noty - Tous droits réservés.</span>
                        <span className='mx-3'>|</span>
                        <span className='text-[12px] font-[500]'>Conçu et Développé par</span>
                        <img src={FooterBottomImg} alt="footerlogo" />
                    </div>
                    <div className="right flex items-center gap-x-[18px]">
                        <img src={insta} alt="social icon" />
                        <img src={fab} alt="social icon" />
                        <img src={twi} alt="social icon" />
                        <img src={tik} alt="social icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;