import './ActiveUsers.scss';

import { images } from '../../constants';

const ActiveUsers = () => {
    return (
        <section className="active-users">
            <div className="active-users__container container">
                <div className="active-users__data">
                    <h2 className="active-users__title">Daily active users on social media</h2>
                    <p className="active-users__text">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
                    <div className="active-users__btn-wrapper">
                        <a href="#" className="btn">Start Free</a>
                        <img src={images.btnLine} alt="" className="active-users__btn-line" />
                    </div>
                </div>
                <div className="active-users__img-wrapper">
                    <img src={images.activeUsersImg} alt="Active Followers Image" className="active-users__img" />
                </div>
            </div>
        </section>
    );
};

export default ActiveUsers;