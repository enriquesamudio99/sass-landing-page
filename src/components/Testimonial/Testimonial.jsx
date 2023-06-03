import './Testimonial.scss';

import { images } from '../../constants';

const Testimonial = ({ testimonialData }) => {

    const { image, name, occupation, message } = testimonialData;

    return (
        <div className="testimonial">
            <div className="testimonial__content">
                <div className="testimonial__data">
                    <div className="testimonial__data-quote-container">
                        <img src={images.doubleQuote} alt="" className="testimonial__data-quote" />
                    </div>
                    <img src={images.stars} alt="" className="testimonial__data-stars" />
                    <p className="testimonial__data-message">{message}</p>
                </div>
                <div className="testimonial__user">
                    <img src={image} alt="User Image" className="testimonial__user-img" />
                    <div className="testimonial__user-info">
                        <p className="testimonial__user-name">{name}</p>
                        <p className="testimonial__user-occupation">{occupation}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;