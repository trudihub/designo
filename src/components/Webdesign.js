import Header from "./Header"
import Footer from "./Footer"
import { useEffect } from "react"
import ExpressImg from "./assets/web-design/desktop/image-express.jpg"
import BlogrImg from "./assets/web-design/desktop/image-blogr.jpg"
import CampImg from "./assets/web-design/desktop/image-camp.jpg"
import PhotonImg from "./assets/web-design/desktop/image-photon.jpg"
import TransferImg from "./assets/web-design/desktop/image-transfer.jpg"
import BuilderImg from "./assets/web-design/desktop/image-builder.jpg"
import MobileDesign from "./assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg"
import TabletDesign from "./assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg"
import LeafPattern from "./assets/shared/desktop/bg-pattern-leaf.svg"
import { Link } from "react-router-dom"
import { DesignHeader, WebprojectsWrapper, ProjectWrapper, Headline, Paragraph, ProjectContainer } from "./StyledComponents"

const Webdesign = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [])
    return (
        <>
            <Header/>
                <DesignHeader>
                    <img className="mobileDesign" src={MobileDesign} alt="mobile design header"/>
                    <img src={TabletDesign} alt="tablet design header" className="tabletDesign"/>
                    <h1>
                        Webdesign
                    </h1>
                    <p>We built website that serve as powerful marketing tools and bring memorable brand experience</p>
                </DesignHeader>
                <WebprojectsWrapper>
                <img className="leafPattern" style={{position:"absolute", zIndex:"0"}} src={LeafPattern} alt=""/>
                    <div className="projectContainer">
                        <img src={ExpressImg} alt="Express website preview"/>
                        <div>
                            <h2>EXPRESS</h2>
                            <p>A mulit-carrier shipping website for ecommerce business</p>
                        </div>
                    </div>
                    <div className="projectContainer">
                    <img src={TransferImg} alt="Express website preview"/>
                        <div>
                            <h2>TRANSFER</h2>
                            <p>Site for low cost money transfer and sending money within seconds</p>
                        </div>
                    </div>
                    <div className="projectContainer">
                    <img src={PhotonImg} alt="Express website preview"/>
                        <div>
                            <h2>PHOTON</h2>
                            <p>A state-of-the-art music player with high-resolution audio and DSP effects</p>
                        </div>
                    </div>
                    <div className="projectContainer">
                    <img src={BuilderImg} alt="Express website preview"/>
                        <div>
                            <h2>BUILDER</h2>
                            <p>Connects user with local contractors based on their location</p>
                        </div>
                    </div>
                    <div className="projectContainer">
                    <img src={BlogrImg} alt="Express website preview"/>
                        <div>
                            <h2>BLOGR</h2>
                            <p>Blogr is a platform for creating an online blog or publication</p>
                        </div>
                    </div>
                    <div className="projectContainer">
                    <img src={CampImg} alt="Express website preview"/>
                        <div>
                            <h2>CAMP</h2>
                            <p>Get expert training in coding, data, design and digital marketing</p>
                        </div>
                    </div>
                </WebprojectsWrapper>
                <ProjectWrapper className="desktopProjectWrapper">
                <Link to="/appdesign">
                <ProjectContainer id="appDesignImg">
                    <Headline style={{marginTop:"0"}}>APP DESIGN</Headline>
                    <Paragraph style={{letterSpacing:"5px", marginLeft:"0"}}>VIEW PROJECTS</Paragraph>
                </ProjectContainer>
                </Link>
                <Link to="/graphicdesign">
                <ProjectContainer id="graphicDesignImg">
                    <Headline style={{marginTop:"0"}}>GRAPHIC DESIGN</Headline>
                    <Paragraph style={{letterSpacing:"5px", marginLeft:"0"}}>VIEW PROJECTS</Paragraph>
                </ProjectContainer>
                </Link>
                </ProjectWrapper>

            <Footer/>
        </>
    )
}

export default Webdesign
