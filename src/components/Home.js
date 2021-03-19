import Header from "./Header"
import Footer from "./Footer"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { HomeWrapper, Headline, Paragraph, Button, ProjectContainer, QualitiesContainer, QualitiesWrapper,
ProjectWrapper } from "./StyledComponents"
import ImageHeroPhone from "./assets/home/desktop/image-hero-phone.png"

import IllustrationPassionate from "./assets/home/desktop/illustration-passionate.svg"
import IllustrationResourceful from "./assets/home/desktop/illustration-resourceful.svg"
import IllustrationFriendly from "./assets/home/desktop/illustration-friendly.svg"
import LeafPattern from "./assets/shared/desktop/bg-pattern-leaf.svg"



const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [])
    return (
        <>
            <Header/>
            <HomeWrapper>
            <svg style={{position:"absolute",marginTop:"100px"}} width="640" height="639" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stopColor="#5D0202" stopOpacity="0" offset="0%"/><stop stopColor="#5D0202" stopOpacity=".498" offset="100%"/></linearGradient></defs><circle fill="url(#a)" transform="matrix(0 -1 -1 0 640 640)" cx="320" cy="320" r="320" fillRule="evenodd" opacity=".309"/></svg>
            <div style={{zIndex:"10"}}>
            <Headline>Award-winning custom designs and digital branding solutions</Headline>
            <Paragraph>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</Paragraph>
            <Link to="/webdesign">
            <Button>LEARN MORE</Button>
            </Link>
            </div>
            <img src={ImageHeroPhone} alt=""/>

            </HomeWrapper>

            <ProjectWrapper>
                <img className="leafPattern" style={{position:"absolute", transform: "translateY(-50%)", zIndex:"0"}} src={LeafPattern} alt=""/>
                <Link to="/webdesign" className="webDesignImg">
                <ProjectContainer id="webDesignImg">
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
                <Link to="/graphicdesign">
                <ProjectContainer id="graphicDesignImg">
                    <Headline style={{marginTop:"0"}}>GRAPHIC DESIGN</Headline>
                    <Paragraph style={{letterSpacing:"5px", marginLeft:"0"}}>VIEW PROJECTS</Paragraph>
                </ProjectContainer>
                </Link>

            </ProjectWrapper>

            <QualitiesWrapper>
                <QualitiesContainer>
                    <img src={IllustrationPassionate} alt="Illustration passionate"/>
                    <svg style={{position:"absolute"}} xmlns="http://www.w3.org/2000/svg" width="202" height="202"><defs><linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stopColor="#5D0202" stopOpacity="0"/><stop offset="100%" stopColor="#5D0202" stopOpacity=".498"/></linearGradient></defs><circle cx="101" cy="101" r="101" fill="url(#a)" fillRule="evenodd" opacity=".203" transform="matrix(-1 0 0 1 202 0)"/></svg>
                    <div>
                        <h2>PASSIONATE</h2>
                        <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
                    </div>
                </QualitiesContainer>
                <QualitiesContainer>
                    <img src={IllustrationResourceful} alt="Illustration resourceful"/>
                    <svg style={{position:"absolute"}} xmlns="http://www.w3.org/2000/svg" width="202" height="202"><defs><linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stopColor="#5D0202" stopOpacity="0"/><stop offset="100%" stopColor="#5D0202" stopOpacity=".498"/></linearGradient></defs><circle cx="101" cy="101" r="101" fill="url(#a)" fillRule="evenodd" opacity=".203" transform="matrix(-1 0 0 1 202 0)"/></svg>
                    <div>
                        <h2>RESOURCEFUL</h2>
                        <p>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs. </p>
                    </div>
                </QualitiesContainer>
                <QualitiesContainer>
                    <img src={IllustrationFriendly} alt="Illustration friendly"/>
                    <svg style={{position:"absolute"}} xmlns="http://www.w3.org/2000/svg" width="202" height="202"><defs><linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stopColor="#5D0202" stopOpacity="0"/><stop offset="100%" stopColor="#5D0202" stopOpacity=".498"/></linearGradient></defs><circle cx="101" cy="101" r="101" fill="url(#a)" fillRule="evenodd" opacity=".203" transform="matrix(-1 0 0 1 202 0)"/></svg>
                    <div>
                        <h2>FRIENDLY</h2>
                        <p>We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
                    </div>
                </QualitiesContainer>
            </QualitiesWrapper>
            <Footer/>
        </>
    )
}

export default Home
