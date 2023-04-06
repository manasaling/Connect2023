import MatchedProfile from "./MatchedProfiles";
import Layout from "./Layout";
import ProfileList from "./ProfileList";
import ScrollReveal from 'scrollreveal';
import React, { useEffect } from 'react';
import './LandingPage.css';
import LogoLight from './dist/images/logo-light.svg';
import LogoDark from './dist/images/logo-dark.svg';
import HeaderIllustrationLight from "./dist/images/header-illustration-light.svg";
import HeaderIllustrationDark from "./dist/images/header-illustration-dark.svg";
import HeroMediaLight from "./dist/images/hero-media-illustration-light.svg";
import HeroMediaLDark from "./dist/images/hero-media-illustration-dark.svg";
import HeroMediaLight2 from "./dist/images/hero-media-light.svg";
import HeroMediaDark2 from "./dist/images/hero-media-dark.svg";
import FeatureIllustrationDark from "./dist/images/features-illustration-dark.svg";
import FeatureBoxDark from "./dist/images/features-box-dark.svg";
import FeatureIllustrationTopDark from "./dist/images/features-illustration-top-dark.svg";
import LogoLightFeature from './dist/images/feature-03-light.svg';
import LogoDarkFeature from './dist/images/feature-03-dark.svg';
import LogoLightFeatureTwo from './dist/images/feature-02-light.svg'
import LogoDarkFeatureTwo from './dist/images/feature-02-dark.svg'
import LogoLightFeatureOne from './dist/images/feature-01-light.svg'
import LogoDarkFeatureOne from './dist/images/feature-01-dark.svg'
import FeatureIllustrationTop from './dist/images/features-illustration-top-light.svg'
import FeatureBox from './dist/images/features-box-light.svg'
import FeatureIllustrationLight from './dist/images/features-illustration-light.svg'
import FrontPageImage from './dist/images/frontPageImage2.png'
import ConnectLogo from './images/connectlogo2.png'
import Typed from "typed.js";
import { useRef } from "react";
import { Link } from 'react-router-dom'







// import styles from './LandingPage.module.css';
const LandingPage = () => {

    // Create Ref element.
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
        strings: ["Compatible Teams", "Your Perfect Matching", "Simplistic Communication", "Succesful Hackathons"], // Strings to display
        // Speed settings, try diffrent values untill you get good results
        startDelay: 300,
        typeSpeed: 75,
        backSpeed: 50,
        backDelay: 100,
        smartBackspace: true,
        loop: true,
        showCursor: true,
        cursorChar: "",
        contentType: "html",
       
      
        });

        // Destropying
        return () => {
        typed.destroy();
        };
    }, []);

    useEffect(() => {
        const doc = document;
        const rootEl = doc.documentElement;
        const body = doc.body;
        const lightSwitch = doc.getElementById('lights-toggle');
        const sr = window.sr = ScrollReveal();
    
        rootEl.classList.remove('no-js');
        rootEl.classList.add('js');
    
        window.addEventListener('load', function () {
          body.classList.add('is-loaded');
        });
    
        function revealAnimations () {
          sr.reveal('.feature', {
            duration: 600,
            distance: '20px',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            origin: 'right',
            viewFactor: 0.2
          });
        }
    
        if (body.classList.contains('has-animations')) {
          window.addEventListener('load', revealAnimations);
        }
    
        if (lightSwitch) {
          window.addEventListener('load', checkLights);
          lightSwitch.addEventListener('change', checkLights);
        }
    
        function checkLights () {
          let labelText = lightSwitch.parentNode.querySelector('.label-text');
          if (lightSwitch.checked) {
            body.classList.remove('lights-off');
            if (labelText) {
              labelText.innerHTML = 'dark';
            }
          } else {
            body.classList.add('lights-off');
            if (labelText) {
              labelText.innerHTML = 'light';
            }
          }
        }
      }, []);
    return (   
        <div className='background'>
            
         
{/* <html lang="en" className="no-js"> */}
{/* <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1"> */}
    <title>Switch Template</title>
    <link href="https://fonts.googleapis.com/css?family=Heebo:400,700|IBM+Plex+Sans:600" rel="stylesheet"></link>
    <link rel="stylesheet" href="./LandingPage.css"></link>
    <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>
{/* </head> */}
<div className="is-boxed has-animations">
    <div className="body-wrap boxed-container">
        <header className="site-header">
            <div className="container">
                <div className="site-header-inner">
                    <div className="brand header-brand">
                        <h1 className="m-0">
                            <a href="#">
								<img className="header-logo-image asset-light" src={ConnectLogo} alt="Logo"></img>
								<img className="header-logo-image asset-dark" src={LogoDark} alt="Logo"></img>
                                {/* <button className="goToTool">Access Connect</button>
                                <Link to= "/" className="goToTool"> Access Connect </Link> */}
                                <a href="/">
                                <button  className="goToTool">Access Connect</button>
                                </a>
                            </a>
                        </h1>
                    </div>
                </div>
            </div>
        </header>

        <div>
            <div className="hero">
                <div className="container">
                    <div className="hero-inner">
						<div className="hero-copy">
	                        <h1 className="hero-title mt-0">Meet <b>Connect</b></h1>
	                        <p className="hero-paragraph1">Let's Turn Your Passion Into Reality. Together </p>
                            <p className="hero-paragraph">Meet the perfect team matching platform for any competition. </p>
	                        <span className="typingScript" ref={el}></span>
                            <div className="hero-cta">
                                
								<a className="button button-primary" href="#">Interested?</a>
								<div className="lights-toggle">
									{/* <input id="lights-toggle" type="checkbox" name="lights-toggle" className="switch" checked="checked"></input> */}
									{/* <label for="lights-toggle" className="text-xs"><span>Turn me <span className="label-text">dark</span></span></label> */}
								</div>
							</div>
						</div>
						<div className="hero-media">
							<div className="header-illustration">
								<img className="header-illustration-image asset-light" src={HeaderIllustrationDark} alt="Header illustration"></img>
								<img className="header-illustration-image asset-dark" src={HeaderIllustrationDark} alt="Header illustration"></img>
							</div>
							<div className="hero-media-illustration">
								<img className="hero-media-illustration-image asset-light" src={HeroMediaLDark} alt="Hero media illustration"></img>
								<img className="hero-media-illustration-image asset-dark" src={HeroMediaLDark} alt="Hero media illustration"></img>
							</div>
							<div className="hero-media-container">
                                {/* PHOTO */}
								<img className="hero-media-image asset-light" src={FrontPageImage} alt="Hero media"></img>
								<img className="hero-media-image asset-dark" src={HeroMediaDark2} alt="Hero media"></img>
							</div>
						</div>
                    </div>
                </div>
            </div>

            <div className="features section">
                <div className="container">
					<div className="features-inner section-inner has-bottom-divider">
						<div className="features-header text-center">
							<div className="container-sm">
								<h2 className="section-title mt-0">What is Connect?</h2>
	                            <p className="section-paragraph">Your Perfect Team Formation Platform To Improve Participation and the Success Rate of Your Competition</p>
								<div className="features-image">
									<img className="features-illustration asset-dark" src={FeatureIllustrationDark} alt="Feature illustration"></img>
									<img className="features-box asset-dark" src={FeatureBoxDark} alt="Feature box"></img>
									<img className="features-illustration asset-dark" src={FeatureIllustrationTopDark} alt="Feature illustration top"></img>
									<img className="features-illustration asset-light" src={FeatureIllustrationLight} alt="Feature illustration"></img>
									<img className="features-box asset-light" src={FeatureBox} alt="Feature box"></img>
									<img className="features-illustration asset-light" src={FeatureIllustrationTop} alt="Feature illustration top"></img>
								</div>
							</div>
                        </div>
                        <div className="features-wrap">
                            <div className="feature is-revealing">
                                <div className="feature-inner">
                                    <div className="feature-icon">
										<img className="asset-light" src={LogoDarkFeatureOne} alt="Feature 01"></img>
										<img className="asset-dark" src={LogoDarkFeatureOne} alt="Feature 01"></img>
                                    </div>
									<div className="feature-content">
                                    	<h3 className="feature-title mt-0">Increase Success</h3>
                                    	<p className="text-sm mb-0">More Compatible Teams = More Fun = More Participants = More Success</p>
									</div>
								</div>
                            </div>
							<div className="feature is-revealing">
                                <div className="feature-inner">
                                    <div className="feature-icon">
										<img className="asset-light" src={LogoDarkFeatureTwo} alt="Feature 02"></img>
										<img className="asset-dark" src={LogoDarkFeatureTwo} alt="Feature 02"></img>
                                    
                                    </div>
									<div className="feature-content">
                                    	<h3 className="feature-title mt-0">Increase Retention</h3>
                                    	<p className="text-sm mb-0">Increase Participant Retention By Helping Them Find People and Projects They Love</p>
									</div>
								</div>
                            </div>
							<div className="feature is-revealing">
                                <div className="feature-inner">
                                    <div className="feature-icon">
										<img className="asset-light" src={LogoDarkFeature} alt="Feature 03"></img>
										<img className="asset-dark" src={LogoDarkFeature} alt="Feature 03"></img>
                                    </div>
									<div className="feature-content">
                                    	<h3 className="feature-title mt-0">Increase Impact</h3>
                                    	<p className="text-sm mb-0">By having more Compatible teams with solid interests, you can increase the impact of your competition.</p>
									</div>
								</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

			<div className="cta section">
                <div className="container-sm">
                    <div className="cta-inner section-inner">
                        <div className="cta-header text-center">
                            <h2 className="section-title mt-0">Let's Discuss How You Can Use Connect</h2>
                            <p className="section-paragraph">Don't miss out on the chance for your competition to be one of the best of the season. We are here to make you more succesful.</p>
							<div className="cta-cta">
								<a className="button button-primary" href="mailto:pdani1@uw.edu">Contact Us</a>
							</div>
					    </div>
                    </div>
                </div>
            </div>
        </div>

        
    </div>

    <script src="dist/js/main.min.js"></script>
</div>

        
        </div>
        

     );
}
 
export default LandingPage;