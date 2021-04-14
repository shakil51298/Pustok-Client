import React from 'react';
import BestSellerBooks from '../BestSellerBooks/BestSellerBooks';
import Carusell from '../Carusell/Carusell';
import FeaturedBooks from '../FeaturedBooks/FeaturedBooks';
import ShippingAdvantage from '../ShippingAdvantage/ShippingAdvantage';
import SpecialOffer from '../SpecialOffer/SpecialOffer';

const HomeChieldCompo = () => {
    return (
        <div>
            <Carusell/>
            <ShippingAdvantage/>
            <FeaturedBooks/>
            <SpecialOffer/>
            <BestSellerBooks/>
        </div>
    );
};

export default HomeChieldCompo;<h3>Home Chield</h3>