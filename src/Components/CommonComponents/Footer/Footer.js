import React, { useState } from 'react';
import FooterCol from './footerCol/FooterCol';
import './Footer.css'

const Footer = () => {
    const [date ] = useState(new Date().getFullYear())
    
    return (
        <footer className="footerImg">
            <FooterCol />
            <p className="text-center mt-2">All Reserved Based || Copyright {date} Shakil Khan </p>
        </footer>
    );
};

export default Footer;