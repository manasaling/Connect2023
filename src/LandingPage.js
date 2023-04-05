import MatchedProfile from "./MatchedProfiles";
import Layout from "./Layout";
import ProfileList from "./ProfileList";
import ScrollReveal from 'scrollreveal';
import React, { useEffect } from 'react';
// import './LandingPage.css';
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
import styles from './LandingPage.module.css';
const LandingPage = () => {

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

        function revealAnimations() {
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

        function checkLights() {
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

            <title>Switch Template</title>
            <link href="https://fonts.googleapis.com/css?family=Heebo:400,700|IBM+Plex+Sans:600" rel="stylesheet"></link>
            <link rel="stylesheet" href="./LandingPage.css"></link>
            <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>
            {/* </head> */}
            {/* <div className={styles["is-boxed"]} className={styles["has-animations"]}>
                <div className={styles["body-wrap"]} className={styles["boxed-container"]}>
                    <header className={styles["site-header"]}>
                        <div className={styles["container"]}>
                            <div className={styles["site-header-inner"]}>
                                <div className={styles["brand"]} className={styles["header-brand"]}>
                                    <h1 className={styles["m-0"]}>
                                        <a href="#">
                                            <img className={styles["header-logo-image"]} className={styles["asset-light"]} src={LogoDark} alt="Logo"></img>
                                            <img className={styles["header-logo-image"]} className={styles["asset-dark"]} src={LogoDark} alt="Logo"></img>
                                        </a>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </div> */}
            <div className={`${styles["is-boxed"]} ${styles["has-animations"]}`}>
    <div className={`${styles["body-wrap"]} ${styles["boxed-container"]}`}>
        <header className={`${styles["site-header"]}`}>
            <div className={`${styles["container"]}`}>
                <div className={`${styles["site-header-inner"]}`}>
                    <div className={`${styles["brand"]} ${styles["header-brand"]}`}>
                        <h1 className={`${styles["m-0"]}`}>
                            <a href="#">
                                <img className={`${styles["header-logo-image"]} ${styles["asset-light"]}`} src={LogoDark} alt="Logo"></img>
                                <img className={`${styles["header-logo-image"]} ${styles["asset-dark"]}`} src={LogoDark} alt="Logo"></img>
                            </a>
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    </div>
</div>



            <div>
                <div className={styles.container}>
                    <div className={styles.hero}>
                        <div className={styles.container}>
                            <div className={styles.heroInner}>
                                <div className={styles.heroCopy}>
                                    <h1 className={`${styles.heroTitle} ${styles.mt0}`}>Landing template for startups</h1>
                                    <p className={styles.heroParagraph}>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
                                    <div className={styles.heroCta}>
                                        <a className={`${styles.button} ${styles.buttonPrimary}`} href="#">Buy it now</a>
                                        <div className={styles.lightsToggle}>
                                            {/* <input id="lights-toggle" type="checkbox" name="lights-toggle" className="switch" checked="checked"></input> */}
                                            {/* <label for="lights-toggle" className="text-xs"><span>Turn me <span className="label-text">dark</span></span></label> */}
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.heroMedia}>
                                    <div className={styles.headerIllustration}>
                                        <img className={`${styles.headerIllustrationImage} ${styles.assetLight}`} src={HeaderIllustrationDark} alt="Header illustration"></img>
                                        <img className={`${styles.headerIllustrationImage} ${styles.assetDark}`} src={HeaderIllustrationDark} alt="Header illustration"></img>
                                    </div>
                                    <div className={styles.heroMediaIllustration}>
                                        <img className={`${styles.heroMediaIllustrationImage} ${styles.assetLight}`} src={HeroMediaLDark} alt="Hero media illustration"></img>
                                        <img className={`${styles.heroMediaIllustrationImage} ${styles.assetDark}`} src={HeroMediaLDark} alt="Hero media illustration"></img>
                                    </div>
                                    <div className={styles.heroMediaContainer}>
                                        <img className={`${styles.heroMediaImage} ${styles.assetLight}`} src={HeroMediaDark2} alt="Hero media"></img>
                                        <img className={`${styles.heroMediaImage} ${styles.assetDark}`} src={HeroMediaDark2} alt="Hero media"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ${styles.section - inner} */}

                <div className={`${styles.features} ${styles.section}`}>
                    <div className={styles.container}>
                        <div className={`${styles['features-inner']} ${styles['has-bottom-divider']}`}>
                            <div className={`${styles['features-header']} ${styles['text-center']}`}>
                                <div className={styles['container-sm']}>
                                    <h2 className={`${styles['section-title']} ${styles.mt0}`}>The Product</h2>
                                    <p className={styles['section-paragraph']}>Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
                                    <div className={styles['features-image']}>
                                        <img className={`${styles['features-illustration']} ${styles['asset-dark']}`} src={FeatureIllustrationDark} alt="Feature illustration" />
                                        <img className={`${styles['features-box']} ${styles['asset-dark']}`} src={FeatureBoxDark} alt="Feature box" />
                                        <img className={`${styles['features-illustration']} ${styles['asset-dark']}`} src={FeatureIllustrationTopDark} alt="Feature illustration top" />
                                        <img className={`${styles['features-illustration']} ${styles['asset-light']}`} src={FeatureIllustrationLight} alt="Feature illustration" />
                                        <img className={`${styles['features-box']} ${styles['asset-light']}`} src={FeatureBox} alt="Feature box" />
                                        <img className={`${styles['features-illustration']} ${styles['asset-light']}`} src={FeatureIllustrationTop} alt="Feature illustration top" />
                                    </div>
                                </div>
                            </div>

                            <div className={styles['features-wrap']}>
                                <div className={`${styles.feature} ${styles['is-revealing']}`}>
                                    <div className={styles['feature-inner']}>
                                        <div className={styles['feature-icon']}>
                                            <img className={styles['asset-light']} src={LogoDarkFeatureOne} alt="Feature 01" />
                                            <img className={styles['asset-dark']} src={LogoDarkFeatureOne} alt="Feature 01" />
                                        </div>
                                        <div className={styles['feature-content']}>
                                            <h3 className={`${styles['feature-title']} ${styles.mt0}`}>Discover</h3>
                                            <p className={`${styles['text-sm']} ${styles.mb0}`}>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dui.</p>
                                        </div>
                                    </div>
                                </div>

                                
                                <div className={`${styles.feature} ${styles['is-revealing']}`}>
                                    <div className={styles['feature-inner']}>
                                        <div className={styles['feature-icon']}>
                                            <img className={styles['asset-light']} src={LogoDarkFeatureTwo} alt="Feature 02" />
                                            <img className={styles['asset-dark']} src={LogoDarkFeatureTwo} alt="Feature 02" />
                                            <div className={styles.feature}>
                                                <div className={styles.featureInner}>
                                                    <div className={styles.featureIcon}>
                                                        <img className={`${styles.assetLight}`} src={LogoDarkFeature} alt="Feature 03" />
                                                        <img className={`${styles.assetDark}`} src={LogoDarkFeature} alt="Feature 03" />
                                                    </div>
                                                    <div className={styles.featureContent}>
                                                        <h3 className={`${styles.featureTitle} ${styles.mt0}`}>Discover</h3>
                                                        <p className={`${styles.textSm} ${styles.mb0}`}>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dui.</p>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className={`${styles.cta} ${styles.section}`}>
                                                <div className={`${styles.containerSm}`}>
                                                    <div className={`${styles.ctaInner} ${styles.sectionInner}`}>
                                                        <div className={`${styles.ctaHeader} ${styles.textCenter}`}>
                                                            <h2 className={`${styles.sectionTitle} ${styles.mt0}`}>Get it and Switch</h2>
                                                            <p className={`${styles.sectionParagraph}`}>Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
                                                            <div className={`${styles.ctaCta}`}>
                                                                <a className={`${styles.button} ${styles.buttonPrimary}`} href="#">Buy it now</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={`${styles.siteFooter} ${styles.hasTopDivider}`}>
                                                <div className={`${styles.container}`}>
                                                    <div className={`${styles.siteFooterInner}`}>
                                                        <div className={`${styles.brand} ${styles.footerBrand}`}>
                                                            <a href="#">
                                                                <img className={`${styles.assetLight}`} src={LogoLight} alt="Logo"></img>
                                                                <img className={`${styles.assetDark}`} src={LogoDark} alt="Logo"></img>
                                                            </a>
                                                        </div>
                                                        <ul className={`${styles.footerLinks} ${styles.listReset}`}>
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
                                                        <ul className={`${styles.footerSocialLinks} ${styles.listReset}`}>
                                                            <li>
                                                                <a href="#">
                                                                    <span className={`${styles.screenReaderText}`}>Facebook</span>
                                                                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" fill="#FFF" />
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
                                
                                </div>

                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                




                                );

    
}

export default LandingPage;