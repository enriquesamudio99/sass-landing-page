import './CTA.scss';

import { images } from '../../constants';

const CTA = () => {
    return (
        <section className="cta">
            <div className="cta__container container">
                <div className="cta__content">
                    <img src={images.ctaBlob} alt="" className="cta__content-blob" />
                    <span className="cta__subtitle">Join With Our Community</span>
                    <h2 className="cta__title">Set your social media <br /> growth on autopilot.</h2>
                    <form action="" className="cta__form" onSubmit={(e) => e.preventDefault()} >
                        <input type="email" className="cta__form-input" placeholder="Your Email Address" />
                        <button
                            type="submit"
                            className="cta__form-btn"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
 
export default CTA;