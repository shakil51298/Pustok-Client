import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

const FooterCol = () => {
    return (
        <section className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <h1 style={{ color: 'rgba(98,171,0,255)', fontWeight: '1000' }}>
                        <FontAwesomeIcon className="mr-2" icon={faBookOpen}/>
                        PUSTOK</h1>
                    <p><b>Address : </b> Example Street 98 , HH2 Bacha, New York, USA</p>
                    <p><b>Phone : </b> +81542124550</p>
                    <p><b>Email : </b> <a href="mailto:shakilkhan51298@gmail.com">shakilkhan51298@gmail.com</a></p>
                </div>
                <div className="col-md-2">
                    <h5 className="text-uppercase">information</h5>
                    <div className=" footerLink">
                        <Link to="pricesDrop">Prices drop</Link>
                    </div>
                    <div className="footerLink">
                        <Link to="NewProducts">New Products</Link>
                    </div>
                    <div className="footerLink">
                        <Link to="BestSeller">Best Seller</Link>
                    </div>
                    <div className="footerLink">
                        <Link to="ContactUs">Contact Us</Link>
                    </div>
                    <div className="footerLink">
                        <Link to="Sitemap">Sitemap</Link>
                    </div>
                </div>
                <div className="col-md-2">
                    <h5 className="text-uppercase">Extras</h5>
                    <div className="footerLink">
                        <Link to="Delivery">Delivery</Link>
                    </div>
                    <div className="footerLink">
                        <Link to="AboutUs">About Us</Link>
                    </div>
                    <div className="footerLink">
                        <Link to="Stories">Stories</Link>
                    </div>
                    <div className="footerLink">
                        <Link to="ContactUs">Contact Us</Link>
                    </div>
                    <div className="footerLink">
                        <Link to="Sitemap">Sitemap</Link>
                    </div>
                </div>
                <div className="col-md-4">
                    <h5 className="text-uppercase">Newslatter Subscribe</h5>
                    <form action="">
                        <input type="text" className="form-control" placeholder="Enter You Email Here..." />
                        <input type="submit" className="btn btn-outline-success w-100 mt-2" value="SUBSCRIBE" />
                    </form>
                    <div className="stayConnected">
                        <h5 className="text-uppercase mt-2">Stay connected</h5>
                        <Link><FacebookIcon className="m-1" /></Link>
                        <Link><InstagramIcon className="m-1" /></Link>
                        <Link><YouTubeIcon className="m-1" /></Link>
                        <Link><TwitterIcon className="m-1" /></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterCol;