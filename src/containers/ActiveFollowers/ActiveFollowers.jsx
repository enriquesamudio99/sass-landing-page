import './ActiveFollowers.scss';

import { images } from '../../constants';

const ActiveFollowers = () => {
    return (
        <section className="active-followers">
            <div className="active-followers__container container">
                <div className="active-followers__data">
                    <h2 className="active-followers__title">Get thousands of active followers</h2>
                    <p className="active-followers__text">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
                    <div className="active-followers__btn-wrapper">
                        <a href="#" className="btn">Start Free</a>
                        <img src={images.btnLine} alt="" className="active-followers__btn-line" />
                    </div>
                </div>
                <div className="active-followers__img-wrapper">
                    <img src={images.activeFollowersImg} alt="Active Followers Image" className="active-followers__img" />
                </div>
            </div>
        </section>
    );
};
 
export default ActiveFollowers;