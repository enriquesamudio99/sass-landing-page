import './Footer.scss';

import { images } from '../../constants';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__content">
                    <h2 className="footer__title"><span className="footer__title-span">Join millions of</span> creative people with Shakir</h2>
                    <a href="#join" className="btn btn--with-icon footer__btn">
                        Join The Waitlist
                        <img src={images.rightArrowDark} alt="" className="btn__icon" />
                    </a>
                </div>

                <div className="footer__data">
                    <div className="footer__data-container container">
                        <div className="footer__info">
                            <a className="footer__brand" href="#">
                                ARSHAKIR
                            </a>
                            <p className="footer__info-text">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
                        </div>
                        <div className="footer__links">
                            <div className="footer__links-box">
                                <h3 className="footer__links-title">Company</h3>
                                <a href="#" className="footer__link">About Us</a>
                                <a href="#" className="footer__link">Careers</a>
                                <a href="#" className="footer__link">Blog</a>
                                <a href="#" className="footer__link">Pricing</a>
                            </div>
                            <div className="footer__links-box">
                                <h3 className="footer__links-title">Product</h3>
                                <a href="#" className="footer__link">Facebook Followers</a>
                                <a href="#" className="footer__link">Instagram Followers</a>
                                <a href="#" className="footer__link">Twitter Followers</a>
                                <a href="#" className="footer__link">TikTok Followers</a>
                            </div>
                            <div className="footer__links-box">
                                <h3 className="footer__links-title">Resources</h3>
                                <a href="#" className="footer__link">Proposal Template</a>
                                <a href="#" className="footer__link">Invoices</a>
                                <a href="#" className="footer__link">Tutorial</a>
                                <a href="#" className="footer__link">How to increase activity</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer__copy">
                    <div className="footer__copy-container container">
                        <p className="footer__copy-text">
                            2022 ARShakir Inc. All rights reserved.
                        </p>
                        <p className="footer__copy-text">
                            Supported by <span className="footer__copy-text-span">Microsoft Startup</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer> 
    );
};
 
export default Footer;