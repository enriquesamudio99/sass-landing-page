import './Companies.scss';

import { images } from '../../constants';

const Companies = () => {
    return (
        <section className="companies">
            <div className="companies__container container">
                <h2 className="companies__title">Trusted By Over 100+ Startups and Freelance Business</h2>
                <div className="companies__grid">
                    <div className="company">
                        <img src={images.openZeppelin} alt="Company Image" className="company__img" />
                    </div>
                    <div className="company">
                        <img src={images.oracle} alt="Company Image" className="company__img" />
                    </div>
                    <div className="company">
                        <img src={images.morpheus} alt="Company Image" className="company__img" />
                    </div>
                    <div className="company">
                        <img src={images.samsung} alt="Company Image" className="company__img" />
                    </div>
                    <div className="company">
                        <img src={images.monday} alt="Company Image" className="company__img" />
                    </div>
                    <div className="company">
                        <img src={images.segment} alt="Company Image" className="company__img" />
                    </div>
                    <div className="company">
                        <img src={images.protonet} alt="Company Image" className="company__img" />
                    </div>
                </div>
            </div>
        </section>
    );
};
 
export default Companies;