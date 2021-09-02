import React from 'react'
import './mainbody.css'
const Mainbody = () => {
    return (
        <div className="mainbody">
            <div className="mainbody_largetext">
                <h1>Learn to code — for free.</h1>
                <h1>Build projects.</h1>
                <h1>Earn certifications.</h1>
            </div>
            <div className="mainbody_para_text">
                <p>Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including:</p>
                <div className="company_icons">
                    <p><i className="devicon-apple-original"></i></p>
                    <p><i className="devicon-google-plain-wordmark"></i></p>
                    <p><i className="devicon-windows8-original"></i></p>
                    <p><i className="devicon-canva-original"></i></p>
                    <p><i className="devicon-linux-plain"></i></p>
                </div>
                <div className="maibody_largebutton">
                    <button>Get Started (It's free)</button>
                </div>

            </div>

        </div>
    )
}

export default Mainbody
