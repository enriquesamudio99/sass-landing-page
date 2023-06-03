import './Hero.scss';

import { images } from '../../constants';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__container container">
                <div className="hero__data">
                    <h1 className="hero__title">Increase your followers on social media</h1>
                    <p className="hero__description">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
                    <a href="#" className="btn btn--with-icon hero__btn">
                        Get Started
                        <img src={images.rightArrow} alt="" className="btn__icon" />
                    </a>
                    <div className="hero__people">
                        <img src={images.heroPeople} alt="" className="hero__people-img" />
                        <p className="hero__people-text">12,000+ people already joined the arshakir’s increase followers plan. Get started today!</p>
                    </div>
                </div>
                <div className="hero__img-wrapper">
                    <img src={images.heroImg} alt="Hero Background" className="hero__img" />
                </div>
            </div>
        </div>
    );
};

export default Hero;