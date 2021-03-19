import Header from "./Header"
import Footer from "./Footer"
import { Link } from "react-router-dom"
import { ContactForm, Button, LocationWrapper } from "./StyledComponents"
import HeroImgMobile from "./assets/contact/mobile/bg-pattern-hero-contact-mobile.svg"
import HeroImgDesktop from "./assets/contact/desktop/bg-pattern-hero-desktop.svg"
import { useRef, useEffect } from "react"
import CanadaSvg from "./assets/shared/desktop/illustration-canada.svg"
import AustraliaSvg from "./assets/shared/desktop/illustration-australia.svg"
import UKSvg from "./assets/shared/desktop/illustration-united-kingdom.svg"


const Contact = () => {

    

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneNumberRef = useRef();
    const messageRef = useRef();
    const numbersRegExp = new RegExp("^[0-9]*$")
    
    useEffect(() => {
        window.scrollTo(0, 0); 
        document.getElementById("contactFooter").style.display = "none";
    }, [])
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if(numbersRegExp.test(phoneNumberRef.current.value)){
            alert("Success! (no data was actually sent sice this is just a frontend project)")
        }else{
            console.log("not so much success")
        }
    }

    return (
        <>
            <Header/>
            <ContactForm>
                <img className="mobileHero" style={{position:"absolute"}} src={HeroImgMobile} alt="background styling"/>
                <img className="desktopHero" style={{position:"absolute"}} src={HeroImgDesktop} alt="background styling"/>

                <div className="formDescription">
                    <h1>Contact Us</h1>
                    <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
                </div>
                <form action="contact" onSubmit={handleSubmit}>
                    <input autoComplete="off" ref={nameRef} type="text" name="name" id="nameInput" placeholder="Name" required/>
                    <input ref={emailRef} type="email" placeholder="Email Address" required/>
                    <input ref={phoneNumberRef} type="text" name="phone" id="phoneNumber" placeholder="Phone"/>
                    <textarea ref={messageRef} name="message" id="message" cols="30" rows="5" placeholder="Message" required maxLength="280"></textarea>
                    <Button type="submit">SUBMIT</Button>
                </form>
            </ContactForm>
            <LocationWrapper>
                <div>
                    <img src={CanadaSvg} alt="Illustration of Canada skyline"/>
                    <Link to="/location"><Button>SEE LOCATION</Button></Link>
                </div>
                <div>
                    <img src={AustraliaSvg} alt="Illustration of sydney opera house"/>
                    <Link to="/location"><Button>SEE LOCATION</Button></Link>
                </div>
                <div>
                    <img src={UKSvg} alt="Illustration of tower bridge"/>
                    <Link to="/location"><Button>SEE LOCATION</Button></Link>
                </div>

            </LocationWrapper>
            <Footer />
        </>
    )
}

export default Contact
