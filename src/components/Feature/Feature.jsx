import './Feature.scss';

const Feature = ({ featureData }) => {

    const { icon, title, text } = featureData;

    return (
        <div className="feature">
            <div className="feature__content">
                <img src={icon} alt="Feature Icon" className="feature__icon" />
                <h3 className="feature__title">{title}</h3>
                <p className="feature__text">{text}</p>
            </div>
        </div>
    );
};

export default Feature;