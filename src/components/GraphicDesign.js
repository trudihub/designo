import Header from "./Header"
import Footer from "./Footer"
import { useEffect } from "react"
import MobileDesign from "./assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg"
import TabletDesign from "./assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg"
import BoxedWaterImg from "./assets/graphic-design/desktop/image-boxed-water.jpg"
import ChangeImg from "./assets/graphic-design/desktop/image-change.jpg"
import ScieneImg from "./assets/graphic-design/desktop/image-science.jpg"
import { Link } from "react-router-dom"
import LeafPattern from "./assets/shared/desktop/bg-pattern-leaf.svg"

import { DesignHeader, WebprojectsWrapper, ProjectContainer, ProjectWrapper, Headline, Paragraph } from "./StyledComponents"

const GraphicDesign = () => {

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
                        Graphic Design
                    </h1>
                    <p>We deliver eye-catching branding materials that are tailored to meet your business objectives.</p>
            </DesignHeader>
            <WebprojectsWrapper style={{gridTemplateRows:"1fr"}}>
                <img className="leafPattern" style={{position:"absolute", zIndex:"0"}} src={LeafPattern} alt=""/>
                    <div className="projectContainer">
                        <img src={ChangeImg} alt="Project Preview"/>
                        <div>
                            <h2>TIM BROWN</h2>
                            <p>A book cover designed for Tim Brown’s new release, ‘Change’</p>
                        </div>
                    </div>
                    <div className="projectContainer">
                        <img src={BoxedWaterImg} alt="Project Preview"/>
                        <div>
                            <h2>BOXED WATER</h2>
                            <p>A simple packaging concept made for Boxed Water</p>
                        </div>
                    </div>
                    <div className="projectContainer">
                        <img src={ScieneImg} alt="Project Preview"/>
                        <div>
                            <h2>SCIENCE</h2>
                            <p> A poster made in collaboration with the Federal Art Project</p>
                        </div>
                    </div>
            </WebprojectsWrapper>
            <ProjectWrapper className="desktopProjectWrapper">
                <Link to="/webdesign">
                <ProjectContainer style={{gridArea: "1/1/2/2"}} id="webDesignImg" >
                    <Headline style={{marginTop:"0"}}>WEB DESIGN</Headline>
                    <Paragraph style={{letterSpacing:"5px", marginLeft:"0"}}>VIEW PROJECTS</Paragraph>
                </ProjectContainer>
                </Link>
                <Link to="/appdesign">
                <ProjectContainer id="appDesignImg">
                    <Headline style={{marginTop:"0"}}>APP DESIGN</Headline>
                    <Paragraph style={{letterSpacing:"5px", marginLeft:"0"}}>VIEW PROJECTS</Paragraph>
                </ProjectContainer>
                </Link>
            </ProjectWrapper>
            <Footer/>
        </>
    )
}

export default GraphicDesign
