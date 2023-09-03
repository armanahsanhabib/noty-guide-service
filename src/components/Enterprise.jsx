import React from 'react';
import Arrow1 from '../assets/images/Arrow 1 dark.svg';
import Company2 from '../assets/images/Company2.png';
import Company3 from '../assets/images/Company3.png';
import Company4 from '../assets/images/Company4.png';
import Company5 from '../assets/images/Company5.png';
import Company6 from '../assets/images/Company6.png';
import RedirectIcon from '../assets/images/Redirect iconCarrier.svg';
import Company1 from '../assets/images/logo_darty 1.png';
import Stars1 from '../assets/images/stars1.png';
import Stars2 from '../assets/images/stars2.svg';
import Stars3 from '../assets/images/stars3.svg';
import Stars4 from '../assets/images/stars4.png';
import Stars5 from '../assets/images/stars5.svg';
import Stars6 from '../assets/images/stars6.svg';


const cardsData = [
    {
        companyImg: Company1,
        companyName: "DARTY",
        text: "Entreprise de vente au détail",
        ratingStar: Stars1,
        ratingComment: "EXCELLENT",
        score: 4.3,
        nombres: 250,
        bgColor: "bg-[#43A047]",
        textColor: "text-[#43A047]"
    },
    {
        companyImg: Company2,
        companyName: "Ennakl Automobiles",
        text: "Concessionnaire de Voitures",
        ratingStar: Stars2,
        ratingComment: "MOYEN",
        score: 2.5,
        nombres: 121,
        bgColor: "bg-[#FCD700]",
        textColor: "text-[#FCD700]",
    },
    {
        companyImg: Company3,
        companyName: "La Cigale Tabarka Hôtel",
        text: "Hôtels et Maisons d'Hôte",
        ratingStar: Stars3,
        ratingComment: "BON",
        score: 4.0,
        nombres: 121,
        textColor: "text-[#7B1FA2]",
        bgColor: "bg-[#7B1FA2]"
    },
    {
        companyImg: Company4,
        companyName: "GlobalNet",
        text: "IT et Communication",
        ratingStar: Stars4,
        ratingComment: "DÉCEVANT",
        score: 1.8,
        nombres: 10,
        textColor: "text-[#FF7A00]",
        bgColor: "bg-[#FF7A00]"
    },
    {
        companyImg: Company5,
        companyName: "Bolt",
        text: "Services de Taxi et VTC",
        ratingStar: Stars5,
        ratingComment: "MÉDIOCRE",
        score: 1.0,
        nombres: 650,
        bgColor: "bg-[#EA0000]",
        textColor: "text-[#EA0000]"
    },
    {
        companyImg: Company6,
        companyName: "Zara",
        text: "Magasin de Vêtements",
        ratingStar: Stars6,
        ratingComment: "MOYEN",
        score: 2.3,
        nombres: 121,
        bgColor: "bg-[#FCD700]",
        textColor: "text-[#FCD700]",
    },
];

const Card = (props) => {
    return (
        <div
            className="card bg-[#FFFFFF] rounded-[13px]"
            style={{ boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.20)" }}
        >
            <div className="top flex gap-x-[20px] p-[25px]">
                <div className="left">
                    <img className='w-[70px]' src={props.companyImg} alt="company image" />
                </div>
                <div className="right flex flex-col gap-y-[15px] mt-2">
                    <div className="sec1">
                        <h3 className="text-[#000066] text-[24px] font-[700]">{props.companyName}</h3>
                        <p className='text-[#333333] text-[15px] font-[500]'>{props.text}</p>
                    </div>
                    <div className="sec2 flex items-center gap-x-[7px]">
                        <img src={props.ratingStar} alt="rating stars" />
                        <div className={`h-[6px] w-[6px] ${props.bgColor} rounded-full`}></div>
                        <h3 className={`${props.textColor} text-[13px] font-[600]`}>{props.ratingComment}</h3>
                    </div>
                    <div className="sec3">
                        <h3 className='text-[15px] text-[#333333] font-[500]'>Score: <span className='text-[#000099]'>{props.score.toFixed(1)}/5</span></h3>
                        <h3 className='text-[15px] text-[#333333] font-[500]'>Nombre d’avis: <span className='text-[#000099]'>{props.nombres}</span></h3>
                    </div>
                </div>
            </div>
            <hr />
            <div className="bottom flex justify-between items-center px-[25px] py-[12px]">
                <div className="left">
                    <a className='text-[#000066] text-[15px] font-[500] flex items-center gap-x-2' href="/">
                        Lire les avis
                        <img src={Arrow1} alt="arrow icon" />
                    </a>
                </div>
                <div className="right">
                    <button className='flex items-center gap-x-2 text-[15px] font-[500] text-[#000066] rounded-full py-[10px] px-[25px] bg-[#DAE4FF]'>
                        <img src={RedirectIcon} alt="redirect icon" />
                        site web
                    </button>
                </div>
            </div>
        </div>
    );
}

const Enterprise = () => {
    return (
        <div className='bg-[#F2F2F2] flex items-center'>
            <div className="container max-w-[1550px] w-[98%] mx-auto py-[84px]">
                <div className="heading flex justify-between items-center mb-[59px]">
                    <div className="text flex flex-col gap-y-[18px]">
                        <h2 className="text-[32px] text-[#000080] font-[600]">Entreprises les mieux notées</h2>
                        <p className="text-[#0066CC] text-[16px] font-[500]">
                            Plongez dans notre sélection des entreprises les mieux évaluées et les plus recommandées par nos utilisateurs satisfaits.
                        </p>
                    </div>
                </div>
                <div className="cards-container grid grid-cols-3 gap-[45px]">
                    {cardsData.map((data, index) => (
                        <Card
                            key={index}
                            companyImg={data.companyImg}
                            companyName={data.companyName}
                            text={data.text}
                            ratingStar={data.ratingStar}
                            ratingComment={data.ratingComment}
                            score={data.score}
                            nombres={data.nombres}
                            bgColor={data.bgColor}
                            textColor={data.textColor}
                        />
                    ))}
                </div>
                <div className="bottom mt-[74px] flex justify-between items-center">
                    <div className="left">
                        <a className='flex items-center gap-x-2 text-[15px] font-[500] text-[#000066]' href="/">
                            Trouver d'autres entreprises recommandées
                            <img className='w-[20px]' src={Arrow1} alt="arrow icon" />
                        </a>
                    </div>
                    <div className="right flex gap-x-3">
                        <button className='rounded-full border-[1px] border-[#000066] h-[40px] w-[40px] flex items-center justify-center'>
                            <img className='w-[20px] rotate-[180deg]' src={Arrow1} alt="arrow" />
                        </button>
                        <button className='rounded-full border-[1px] border-[#000066] h-[40px] w-[40px] flex items-center justify-center'>
                            <img className='w-[20px]' src={Arrow1} alt="arrow" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enterprise;