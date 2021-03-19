import { DesignHeader, WebprojectsWrapper, ProjectWrapper, ProjectContainer, Headline, Paragraph } from "./StyledComponents"
import MobileDesign from "./assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg"
import TabletDesign from "./assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg"
import AirfilterImg from "./assets/app-design/desktop/image-airfilter.jpg"
import EyecamImg from "./assets/app-design/desktop/image-eyecam.jpg"
import FaceitImg from "./assets/app-design/desktop/image-faceit.jpg"
import LeafPattern from "./assets/shared/desktop/bg-pattern-leaf.svg"
import LoopstudioImg from "./assets/app-design/desktop/image-loopstudios.jpg"
import TodoImg from "./assets/app-design/desktop/image-todo.jpg"
import Header from "./Header"
import Footer from "./Footer"
import { Link } from "react-router-dom"
import { useEffect } from "react"

const Appdesign = () => {

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
                        App Design
                    </h1>
                    <p>Our mobile designs bring intuitive digital solutions to your customer right at their fingertip</p>
            </DesignHeader>
            <WebprojectsWrapper>
            <img className="leafPattern" style={{position:"absolute", zIndex:"0"}} src={LeafPattern} alt=""/>
                <div className="projectContainer">
                        <img src={AirfilterImg} alt="Project preview"/>
                        <div>
                            <h2>AIRFILTER</h2>
                            <p>Solving the problem of poor indoor air quality by filtering air</p>
                        </div>
                </div>
                <div className="projectContainer">
                        <img src={EyecamImg} alt="Project preview"/>
                        <div>
                            <h2>EYECAM</h2>
                            <p>Product that lets you edit your favorite photos and videos at any time </p>
                        </div>
                </div>
                <div className="projectContainer">
                        <img src={FaceitImg} alt="Project preview"/>
                        <div>
                            <h2>FACEIT</h2>
                            <p>Get to meet your favorite internet superstar with the faceit app</p>
                        </div>
                </div>
                <div className="projectContainer">
                        <img src={TodoImg} alt="Project preview"/>
                        <div>
                            <h2>TODO</h2>
                            <p>A todo app that features cloud sync with light and dark mode</p>
                        </div>
                </div>
                <div className="projectContainer">
                        <img src={LoopstudioImg} alt="Project preview"/>
                        <div>
                            <h2>LOOPSTUDIOS</h2>
                            <p>A VR experience app made for Loopstudio</p>
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

export default Appdesign
