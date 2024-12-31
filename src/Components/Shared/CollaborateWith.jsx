import { Link } from "react-router-dom";

const CollaborateWith = () => {
    return (
        <div className="fw-main-row middle-content">
            <div className="fw-container">
                <div className="fw-row">
                    <div className="fw-col-xs-12 ">
                        <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                    </div>
                </div>

                <div className="fw-row">
                    <div className="fw-col-xs-12 frame-8084-7L8">
                        <div className="fw-heading fw-heading-h2">
                            <h2 className='fw-special-title tech-part-AA2'>Collaborate with us</h2>
                        </div>
                        <h2 className="banner_banner_title__k7Ta_" data-classname="title">
                            <span style={{ color: 'color:rgba(83, 83, 83, 1)' }}>We are passionate investors in
                                great ideas</span>
                            <span style={{ color: 'color:rgba(83, 83, 83, 1)' }}>
                                <img src="./images/_Full Review of Devices.gif" alt="texture" />
                                helping businesses to bring their</span>
                            <span style={{ color: 'color:rgba(83, 83, 83, 1)' }}> vision to life and drive the
                                <img src="./images/_Full Review of Devices_1.gif" alt="texture" />
                                global
                            </span>
                            <span style={{ color: 'color: rgba(5, 6, 16, 1)' }}>innovation forward.</span>
                        </h2>
                        <Link to="/contact-us">
                            <div className="frame-66-Y1q frame-dicuss-button">
                                <div className="frame-66-Y1q-text">Let’s Discuss Your Idea</div>
                                <div className="frame-66-Y1q-arrow"></div>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default CollaborateWith;
