import Header from "./Header"
import Footer from "./Footer"
import { Link } from "react-router-dom"
import HeroImg from "./assets/about/mobile/image-about-hero.jpg"
import WorldTalentImg from "./assets/about/mobile/image-world-class-talent.jpg"
import MobileHeroImg from "./assets/shared/desktop/bg-pattern-three-circles.svg"
import RealDealImg from "./assets/about/mobile/image-real-deal.jpg"
import MobileDesign from "./assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg"
import LeafPattern from "./assets/shared/desktop/bg-pattern-leaf.svg"
import CanadaSvg from "./assets/shared/desktop/illustration-canada.svg"
import AustraliaSvg from "./assets/shared/desktop/illustration-australia.svg"
import UKSvg from "./assets/shared/desktop/illustration-united-kingdom.svg"
import { AboutContainer, Button, LocationWrapper } from "./StyledComponents"

const About = () => {
    return (
        <>
            <Header/>
            
            <AboutContainer style={{background: "#E7816B"}}>
                    <img id="heroImgAbout" src={HeroImg} alt="About"/>
                    <div className="aboutHeaderContainer">
                    <img style={{position:"absolute"}} className="mobileDesign" src={MobileDesign} alt="mobile design header"/>
                    <h1>
                        About us
                    </h1>
                    <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.</p>
                    </div>
            </AboutContainer>
            <img style={{position:"absolute", transform: "translateY(-50%)", zIndex:"0"}} src={LeafPattern} alt=""/>
            <AboutContainer >
                <img id="worldTalentAbout" src={WorldTalentImg} alt=""/>
                <div className="worldClassContainer">
                <h1>World class talent</h1>
                <p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms</p>
                <p> Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission. </p>

                </div>
                <img style={{position:"absolute"}} src={MobileHeroImg} alt=""/>
            </AboutContainer>
            
            <LocationWrapper>
                <div>
                    <img src={CanadaSvg} alt="Illustration of Canada skyline"/>
                    <Link to="/location">
                        <Button>SEE LOCATION</Button>
                    </Link>
                </div>
                <div>
                    <img src={AustraliaSvg} alt="Illustration of sydney opera house"/>
                    <Link to="/location">
                    <Button>SEE LOCATION</Button>

                    </Link>
                </div>
                <div>
                    <img src={UKSvg} alt="Illustration of tower bridge"/>
                    <Link to="/location">
                    <Button>SEE LOCATION</Button>

                    </Link>
                </div>

            </LocationWrapper>
            
            <AboutContainer >
                <img id="realDealAbout" src={RealDealImg} alt="Office work on pinwall"/>
                <div className="worldClassContainer">
                <h1>The real deal</h1>
                <p>As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>
                <p>We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
                <img style={{position:"absolute"}} src={MobileHeroImg} alt=""/>
                </div>
            </AboutContainer>
            <Footer/>
        </>
    )
}

export default About
