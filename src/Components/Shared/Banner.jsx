import React, { useRef, useEffect   } from 'react';

const Banner = () => {
    const audioRef = useRef(null);
    const playButtonRef = useRef(null);
    let scrollAnimationId = null; // Variable to store the scroll animation ID

    const playAudio = async () => {
        // Scroll down incrementally
        const totalHeight = document.body.scrollHeight - window.innerHeight; // Total scrollable height
        const duration = 50000; // Total duration in milliseconds (10 seconds)
        const stepTime = 15; // Time in milliseconds between each scroll step
        const stepCount = Math.floor(duration / stepTime); // Total number of steps
        const scrollStep = totalHeight / stepCount; // Amount to scroll in each step

        // Function to perform smooth scrolling
        const scrollDown = () => {
            window.scrollBy(0, scrollStep);
            if (window.scrollY + window.innerHeight < document.body.scrollHeight) {
                scrollAnimationId = requestAnimationFrame(scrollDown); // Continue scrolling
            }
        };

        // Start scrolling
        scrollAnimationId = requestAnimationFrame(scrollDown);

        // Play or pause the audio
        if (audioRef.current.paused) {
            await audioRef.current.play();
        } else {
            audioRef.current.pause();
            audioRef.current.currentTime = 0; // Rewind audio to the beginning
        }
    };

    const handleOutsideClick = (event) => {
        // Pause audio and stop scrolling if clicked outside the button
        if (playButtonRef.current && !playButtonRef.current.contains(event.target)) {
            audioRef.current.pause();
            if (scrollAnimationId) {
                cancelAnimationFrame(scrollAnimationId); // Stop scrolling
            }
        }
    };

    useEffect(() => {
        // Add event listeners for clicks and touches outside the button
        document.addEventListener('click', handleOutsideClick);
        document.addEventListener('touchstart', handleOutsideClick);

        // Cleanup event listeners on component unmount
        return () => {
            document.removeEventListener('click', handleOutsideClick);
            document.removeEventListener('touchstart', handleOutsideClick);
        };
    }, []);
    return (
        <div className="fw-main-row black-bg-content">
            <div className="fw-full-container-top" style={{ backgroundImage: 'url(./images/bg-dots.png)' }}>
                <div className="fw-row">
                    <div className="fw-col-xs-12 ">
                        <div className="fw-divider-space"
                        style={{ marginTop: '100px' }}
                        ></div>
                    </div>
                </div>
                <div className="fw-container">
                    <div className="seo-media-images">
                        <img className="top-image-arrow-1" src="./images/Vector-line-straight.png" />
                    </div>
                    <div className="seo-media-images">
                        <img className="top-image-arrow-2" src="./images/Vector-line-straight.png" />
                    </div>

                    <div className="seo-media-images">
                        <img className="top-image-arrow-3" src="./images/Vector-line-straight.png" />
                    </div>
                    <div className="seo-media-images">
                        <img className="top-image-arrow-4" src="./images/Vector-line-straight.png" />
                    </div>
                </div>
                <div className="content-under-image banner_vector">
                    <div className="fw-row ">
                        <img className="vector-line-1" src="./images/Vector-upper-arrow.png" />
                    </div>
                    <div className="fw-row">
                        <div className="fw-container ">
                            <div className="fw-col-md-4 vector-class">
                                <div className="dot-1"></div>
                                <div className="dot-2"></div>
                                <img className="vector-cross-1" src="./images/vector.png" />
                                <div className="dot-3"></div>
                                <div className="dot-4"></div>
                            </div>
                            <div className="fw-col-md-4">
                                <div className="fw-heading fw-heading-h2">
                                    <h2 className='fw-special-title vector-heading'>MODERN TECHNOLOGIES
                                    </h2>
                                </div>
                            </div>
                            <div className="fw-col-md-4  vector-class">
                                <div className="dot-5"></div>
                                <div className="dot-6"></div>
                                <img className="vector-cross-2" src="./images/vector.png" />
                                <div className="dot-7"></div>
                                <div className="dot-8"></div>
                            </div>
                        </div>
                    </div>
                    <div className="fw-row ">
                        <img className="vector-line-2" src="./images/Vector-upper-arrow.png" />
                    </div>
                    <div className="fw-row">
                        <div className="fw-col-xs-12 ">
                            <div className="fw-divider-space" style={{ marginTop: '100px' }}></div>
                        </div>
                    </div>
                    <div className="fw-row">
                        <div className="container">
                            <div className="fw-col-xs-12 ">
                            </div>
                            <div className="fw-col-xs-12 ">
                                <p className="header-main-content">FULL DEDICATED
                                    & EXPERIENCED
                                    DEVELOPER</p>
                            </div>
                            <div className="fw-col-xs-12 ">
                            </div>
                        </div>
                    </div>
                    <div className="fw-row ">
                        <img className="vector-line-1" src="./images/Vector-upper-arrow.png" />
                    </div>
                    <div className="fw-row">
                        <div className="fw-container">
                            <div className="fw-col-md-4 vector-class">
                                <div className="dot-1"></div>
                                <div className="dot-2"></div>
                                <img className="vector-cross-1" src="./images/vector.png" />
                                <div className="dot-9"></div>
                                <div className="dot-10"></div>
                            </div>
                            <div className="fw-col-md-4">
                                <p className="fw-special-title-building vector-heading">BUILDING &nbsp;
                                    TOMORROW'S &nbsp; SOFTWARE<br /> <span
                                        style={{ fontSize: '24px' }}>TODAY</span>
                                </p>

                            </div>
                            <div className="fw-col-md-4 vector-class">
                                <div className="dot-5"></div>
                                <div className="dot-6"></div>
                                <img className="vector-cross-2" src="./images/vector.png" />
                                <div className="dot-11"></div>
                                <div className="dot-12"></div>
                            </div>
                        </div>
                    </div>
                    <div className="fw-row">
                        <img className="vector-line-2" src="./images/Vector-upper-arrow.png" />
                    </div>



                    <div className="fw-row" style={{ display: 'flex' }}>

                        <div className="fw-col-xs-12 ">
                            <div className="frame-69-Hp3" ref={playButtonRef} onClick={playAudio}>
                                <p className="scroll-down-Dhh">
                                    Click Here For
                                    Better Experience</p>
                                <img className="elbskegiex-1-ieT" src="./images/Scroll Down.gif"
                                    style={{ display: 'block', margin: ' 0 auto' }} />
                            </div>
                        </div>
                        <audio ref={audioRef} id="audioPlayer" src="./images/audio.mp3" loop></audio>

                    </div>



                    {/* <div class="frame-69-Hp3">
                        <p class="scroll-down-Dhh">Scroll Down</p> <img class="elbskegiex-1-ieT"
                            src="images/elbSKEGIEX 1.png" />
                    </div>  */}



                    <div className="fw-row">
                        <div className="fw-col-xs-12 ">
                            <div className="fw-divider-space" style={{ marginTop: '24px' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;