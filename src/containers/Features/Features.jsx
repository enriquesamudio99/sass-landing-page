import './Features.scss';

import { Feature } from '../../components';
import { images, data } from '../../constants';

const Features = () => {

    const { featuresData } = data;

    return (
        <section className="features" id="features">
            <div className="features__container container">
                <img src={images.decoratorLeft} alt="" className="features__decorator features__decorator--left" />
                <img src={images.decoratorRight} alt="" className="features__decorator features__decorator--right" />
                <h2 className="features__title">One platform to increase followers on all social media.</h2>
                <div className="features__grid">
                    {featuresData.map((featureData) => (
                        <Feature featureData={featureData} key={featureData.id} />
                    ))}
                </div>
            </div>
        </section>
    );
};
 
export default Features;