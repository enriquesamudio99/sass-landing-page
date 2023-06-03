import './FAQs.scss';

import { Accordion } from '../../components';

import { images } from '../../constants';

const FAQs = () => {
    return (
        <section className="faqs" id="faqs">
            <div className="faqs__container container">
                <div className="faqs__info">
                    <h2 className="faqs__title">Any questions? <br /> We got you.</h2>
                    <p className="faqs__text">Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
                    <a href="#" className="btn btn--with-icon faqs__btn">
                        More FAQs
                        <img src={images.rightArrowPrimary} alt="" className="btn__icon" />
                    </a>
                </div>
                <div className="faqs__accordion">
                    <Accordion />
                </div>
            </div>
        </section>
    );
};
 
export default FAQs;