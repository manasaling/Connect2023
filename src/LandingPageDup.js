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
        cursorChar: ""
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
	                        <h1 className="hero-title mt-0">Let's <b>Connect</b></h1>
	                        <p className="hero-paragraph">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
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
								<h2 className="section-title mt-0">The Product</h2>
	                            <p className="section-paragraph">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
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
                                    	<h3 className="feature-title mt-0">Discover</h3>
                                    	<p className="text-sm mb-0">Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dui.</p>
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
                                    	<h3 className="feature-title mt-0">Discover</h3>
                                    	<p className="text-sm mb-0">Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dui.</p>
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
                                    	<h3 className="feature-title mt-0">Discover</h3>
                                    	<p className="text-sm mb-0">Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dui.</p>
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
                            <h2 className="section-title mt-0">Get it and Switch</h2>
                            <p className="section-paragraph">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
							<div className="cta-cta">
								<a className="button button-primary" href="#">Buy it now</a>
							</div>
					    </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="site-footer has-top-divider">
            <div className="container">
                <div className="site-footer-inner">
                    <div className="brand footer-brand">
                        <a href="#">
							<img className="asset-light" src={LogoLight} alt="Logo"></img>
							<img className="asset-dark" src={LogoDark} alt="Logo"></img>
                        </a>
                    </div>
                    <ul className="footer-links list-reset">
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">FAQ's</a>
                        </li>
                        <li>
                            <a href="#">Support</a>
                        </li>
                    </ul>
                    <ul className="footer-social-links list-reset">
                        <li>
                            <a href="#">
                                <span className="screen-reader-text">Facebook</span>
                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" fill="#FFF"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="screen-reader-text">Twitter</span>
                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" fill="#FFF"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="screen-reader-text">Google</span>
                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" fill="#FFF"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <div className="footer-copyright">&copy; 2018 Switch, all rights reserved</div>
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