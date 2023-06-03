import 'swiper/css';
import './Testimonials.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Testimonial } from '../../components';
import { data } from '../../constants';

const Testimonials = () => {

    const { testimonialsData } = data;

    return (
        <section className="testimonials" id="testimonials">
            <div className="testimonials__container container">
                <span className="testimonials__subtitle">Testimonial</span>
                <h2 className="testimonials__title">What Our Happy <br /> User Says</h2>
                <Swiper
                    className="testimonials__swiper"
                    spaceBetween={30}
                    breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        576: {
                          slidesPerView: 2,
                        },
                        1280: {
                          slidesPerView: 3,
                        },
                    }}
                    loop={true}
                >
                    {testimonialsData.map((testimonialData) => (
                        <SwiperSlide key={testimonialData.id}>
                            <Testimonial testimonialData={testimonialData} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
 
export default Testimonials;