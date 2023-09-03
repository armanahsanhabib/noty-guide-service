import React from 'react';
import Arrow2 from '../assets/images/Arrow 2.svg';
import iconCarrier from '../assets/images/iconCarrier.svg';
import iconCarrier2 from '../assets/images/iconCarrier2.svg';
import iconCarrier3 from '../assets/images/iconCarrier3.svg';
import iconCarrier4 from '../assets/images/iconCarrier4.svg';
import iconCarrier5 from '../assets/images/iconCarrier5.svg';
import iconCarrier6 from '../assets/images/iconCarrier6.svg';
import iconCarrier7 from '../assets/images/iconCarrier7.svg';
import iconCarrier8 from '../assets/images/iconCarrier8.svg';

const cardsData = [
    {
        icon: iconCarrier,
        text: "Hôtels et Maisons d’Hôte"
    },
    {
        icon: iconCarrier2,
        text: "Restaurants"
    },
    {
        icon: iconCarrier3,
        text: "Services de Location de Voitures"
    },
    {
        icon: iconCarrier4,
        text: "Boutique en Ligne"
    },
    {
        icon: iconCarrier5,
        text: "Banques et Services Financière"
    },
    {
        icon: iconCarrier6,
        text: "Bijouteries"
    },
    {
        icon: iconCarrier7,
        text: "Magasins de Meubles"
    },
    {
        icon: iconCarrier8,
        text: "Agences de Voyage"
    }
];

const Card = (props) => {
    return (
        <div className="card rounded-[13px] bg-[#FFECDB] p-[20px] flex flex-col gap-y-[18px]">
            <div className="icon">
                <img className='h-[43px]' src={props.icon} alt="" />
            </div>
            <div className="text">
                <p className='text-[##000000] text-[17px] font-[600]'>{props.text}</p>
            </div>
        </div>
    );
}

const Categories = () => {
    return (
        <div className='bg-[#F7FAFC] flex items-center'>
            <div className="container max-w-[1550px] w-[98%] mx-auto py-[84px]">
                <div className="heading flex justify-between items-center mb-[59px]">
                    <div className="text flex flex-col gap-y-[18px]">
                        <h2 className="text-[32px] text-[#000033] font-[600]">Explorez par Catégorie</h2>
                        <p className="text-[#4F637B] text-[16px] font-[500]">
                            Découvrez les entreprises et produits les mieux notés dans chaque catégorie et trouvez exactement ce que vous cherchez.
                        </p>
                    </div>
                    <div className="btn">
                        <a className='flex items-center gap-x-2 tetx-[#000066] text-[16px] font-[600]' href="/">Voir Plus <img className='w-[20px]' src={Arrow2} alt="arrow" /></a>
                    </div>
                </div>
                <div className="cards-container grid grid-cols-4 gap-[45px]">
                    {cardsData.map((data, index) => (
                        <Card key={index} icon={data.icon} text={data.text} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;