import React from 'react';
import Footer from '../../CommonComponents/Footer/Footer';
import BestSellerBooks from '../BestSellerBooks/BestSellerBooks';
import BuyThree from '../BuyThree/BuyThree';
import Carusell from '../Carusell/Carusell';
import FeaturedBooks from '../FeaturedBooks/FeaturedBooks';
import Reviews from '../Reviews/Reviews';
import ShippingAdvantage from '../ShippingAdvantage/ShippingAdvantage';
import SpecialOffer from '../SpecialOffer/SpecialOffer';

const HomeChieldCompo = () => {
    return (
        <div>
            <Carusell/>
            <ShippingAdvantage/>
            <FeaturedBooks/>
            <SpecialOffer/>
            <Reviews/>
            <BestSellerBooks/>
            <BuyThree/>
            <Footer/>
        </div>
    );
};

export default HomeChieldCompo;