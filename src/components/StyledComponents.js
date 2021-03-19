import styled from "styled-components"


const HeaderStyle = styled.header`
    height: 96px;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items:center;
    .headerLinks{
        display: none;
        a{
            color: black;
            text-decoration: none;
            border-bottom: 1px solid transparent;
            transition: border-bottom 0.5s ease;
            :hover{
                border-bottom: 1px solid black;
            }
        }
    }
    .menuOverlay{
        position: fixed;
        top: 96px;
        left: 0;
        right: 0;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 100;
        
        ul{
            background: black;
            height: 240px;
            li{
                padding: 20px 15px;
            }
            a{
                color: white;
                text-decoration: none;
            }
        }
    }
    @media(min-width: 768px){
        >svg{
            display: none;
        }
        .headerLinks{
            display:flex;
            width: 40%;
            justify-content: space-around;
            h2{
                font-size: 16px;
            }
        }
    }
    @media(min-width: 1024px){
        width: 80%;
        margin-left: 10%;
        justify-content: space-between;
    }
`
const HeaderLogo = styled.div`
    height: 27px;
    width: 327px;
`
const HomeWrapper = styled.div`
    position: relative;
    overflow: hidden;
    background: #E7816B;
    height: 843px;
    display: flex;
    flex-direction: column;
    text-align: center;
    z-index: 10;
    img{
        width: 100%;
        margin-top: 100px;
        transform: scale(1.3)
    }
    @media(min-width:768px){
        width: 90%;
        border-radius:10px;
        margin-left: 5%;
        h1{
            font-size: 46px;
            width: 70%;
            margin: 30px 15%;
        }
        p{
            width: 60%;
            margin-left:20%;
        }
        img{
            transform: scale(1);
            margin-top: -150px;
        }
        
    }
    @media(min-width:1024px){
        flex-direction: row;
        align-items: center;
        text-align: left;
        width: 80%;
        margin-left:10%;
        >h1, p, button{
            margin-left: 15%;
        }
        img{
            margin-top: 300px;
            width: 40%;
        }
        div{
            width: 70%;
        }
    }

`
const Headline = styled.h1`
    color: white;
    margin: 2em 0 1em 0;
    z-index: 10;
`
const Paragraph = styled.p`
    color:white;
    width:90%;
    margin-left:5%;
`
const Button = styled.button`
    background: white;
    color: black;
    border: none;
    border-radius: 4px;
    width: 152px;
    height: 56px;
    margin-top: 2em;
    cursor: pointer;
    :hover{
        background: rgb(255, 173, 155)
    }

`
const ProjectContainer = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    height: 250px;
    width: 100%;
    margin: 1em 0;
    overflow: hidden;
    :first-of-type{
        margin-top: 5em;
    }
    :before{
        content:"";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.4);
        cursor: pointer;
        border-radius: 10px;
            
    }
    :hover{
        ::after{
            content:"";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(231, 129, 107, 0.5);
            cursor: pointer;
            border-radius: 10px;
        }
    }
   
`
const QualitiesContainer = styled.div`
    display: flex;
    width: 90%;
    margin: 3em 5%;
    line-height: 1.8;
    flex-direction: column;
    position:relative;
    align-items: center;
    text-align: center;
    >div{
        
        margin-top: 2em;
        
        h2{
            margin: 1em 0;
            letter-spacing: 5px;
        }
    }
    @media(min-width: 768px){
        flex-direction: row;
        text-align: left;
        >div{
            margin-left: 2em;
            margin-top: 0;
        }
    }
    @media(min-width:1024px){
        display: flex;
        flex-direction: column;
        text-align: center;
        margin: 0;

    }

`
const QualitiesWrapper = styled.div`
    @media(min-width:1024px){
        margin: 100px 15%;
        display: flex;
        flex-direction: row;
        width: 70%;
    }
`

const ProjectWrapper = styled.div`
    display:block;
    margin: 0 7.5% 200px 7.5%;
    width: 85%;
    overflow: hidden;
    position: relative;
    
    a{
        text-decoration: none;
        height: 100%;
        width: 100%;
        :last-of-type{
            margin-bottom: 200px;
        }
    }
    @media(min-width: 1024px){
        width: 80%;
        height: 640px;
        margin: 5% 10%;
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 30px;
        
        .webDesignImg{
            
            grid-area: 1/1/3/2;
            margin-top: 0;
        
        }
    }
`

const FooterStyle = styled.footer`
    background: black;
    margin-top: 200px;
    a{
        color: white;
        text-decoration: none;
    }
    #footerLogo{
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 250px;
            justify-content: space-around;
        
        img{
            width: 60%;
            height: 30px;
        }
        @media(min-width: 768px){
            flex-direction: row;
            height: 200px;
            img{
                width: 202px;
                height: 30px;
            }
        }
    }
    >div{
        color: white;

        :first-of-type{
            text-align: center;
            padding: 50px 0;
            border-radius: 10px;
            background: #E7816B;
            width: 90%;
            margin-left: 5%;
            transform: translateY(-50%);
            h1{
            margin: auto;
            width: 70%;
            }
            @media(min-width: 1024px){
                width: 80%;
                margin-left: 10%;
            }
        }

    }
   
    section{
        
        >div{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        margin: 2em 0;

        h2{
            color: white;
            margin: 20px 0%;
        } 
        :last-of-type{
            flex-direction: row;
            justify-content: space-around;
            margin-left: 20%;
            width: 60%;
            margin-bottom: 0;
            padding-bottom: 20px;
        }

        }
        @media(min-width:768px){
            display: flex;
            >div{
                margin-left: 2em;
                width: 220px;
                :last-of-type{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    width:300px;
                }
            }
        }
        
    }
    

`

const DesignHeader = styled.div`
    z-index: 10;
   background: #E7816B;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   height: 320px;
   padding: 20px;
   position: relative;
   overflow: hidden;
   text-align: center;
   .mobileDesign{
        display: block;
        position: absolute;
        top: 0;
        right: 0;
   }
   

   h1{
       margin-bottom: 15px;
   }
   .mobileDesign{
       position: absolute;
       
   }
   .tabletDesign{
       display: none;
   }
   p{
       font-weight: lighter;
   }
   @media(min-width:768px){
       height: 252px;
       width: 90%;
       margin-left: 5%;
       border-radius: 10px;
       .mobileDesign{
           display: none;
       }
       .tabletDesign{
           display: block;
           position: absolute;
       }
        
   }
   @media(min-width:1024px){
        width: 80%;
        margin-left: 10%;


   }
`

const WebprojectsWrapper = styled.div`
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    position: relative;
    overflow: hidden;
    .projectContainer{
        z-index: 10;
        height: 478px;
        width: 90%;
        margin: 2em 0;
        img{
            height: 70%;
            width: 100%;
        }
        div{
            background: #FDF3F0;
            height: 30%;
            text-align: center;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            border-radius: 0 0 10px 10px;
            cursor: pointer;
            :hover{
                background: #E7816B;
                h2{
                    color: white;
                }
            }
            h2{
                color: #E7816B;
                letter-spacing: 5px;
                margin-bottom: 10px;
            }
            p{
                width: 80%;
                font-weight: lighter;
            }
        }
        @media(min-width: 768px){
            display: flex;
            height: 310px;
            img{
                width: 50%;
                height: 100%;
                border-radius: 10px 0 0 10px;
            }
            div{
                height: 100%;
                width: 50%;
                border-radius: 0 10px 10px 0;
            }
        }
    }
    @media(min-width:1024px){
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: repeat(3, 1fr);
        width: 80%;
        margin: 200px 10%;
        gap: 30px;
        .projectContainer{
            flex-direction: column;
            height: 478px;
            width: 100%;
            margin: auto;
            img{
                width: 100%;
                height: 70%;
                border-radius: 10px 10px 0 0%;
            }
            div{
                border-radius: 0 0 10px 10px;
                width: 100%;
            }
        }

    }
    .worldClassContainer{
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        width: 90%;
        text-align: center;
        height: 545px;
        
        h1{
            color: #E7816B;
        }
        p{
            margin: 1.5em 0;
        }

    }
   
`
const LocationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        button{
            background:#E7816B;
            color: white;
        }
    }
    @media(min-width:1024px){
        flex-direction: row;
        justify-content: space-evenly;
    }

`
const AboutContainer = styled.div`
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    position: relative;
    background: #FDF3F0;
    height:auto;
    margin: 0;
    .worldClassContainer{
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        width: 90%;
        text-align: center;
        height: 545px;
        
        h1{
            color: #E7816B;
        }
        p{
            margin: 1.5em 0;
        }
    }
    .aboutHeaderContainer{
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 400px;
        text-align: center;
        width: 90%;
        p{
            margin: 1.5em 0;
        }
    }
    .locationHeader{
            color: #E7816B;
            margin: 20px 0;
        }
    .locationData{
        text-align: center;
        line-height: 1.5;
        margin-bottom: 20px;

       h4{
           font-weight: bold;
           
       }
       p{
           font-weight: lighter;
       }
    }
   
    @media(min-width: 768px){
        width: 90%;
        margin: 10% 5%;
        border-radius: 15px;
        height: auto;
        
        .aboutHeaderContainer{
            height: 312px;
        }
        .worldClassContainer{
            height: 416px;
        }
        .locationDataWrapper{
            text-align: center;
        }
    }
    @media(min-width: 1024px){

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        width: 80%;
        margin-left: 10%;
        #heroImgAbout{
            order: 2;
            justify-self: flex-end;
        }
        #realDealAbout{
            order: 2;
            justify-self: flex-end;
        }
        .aboutHeaderContainer{
            margin: auto;
        }
        .worldClassContainer{
            margin: auto;
        }
        #CanadaMap{
            order:2;
        }
        #UKMap{
            order:2;
        }
        .locationDataWrapper{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            width: 80%;
            margin-left: auto;
            text-align:left;
            
            h1{
                grid-area: 1/1/2/3;
                
            }
            .locationData{
                text-align: left;
            }
            
        }
    }
`

const ContactForm = styled.div`
    display: flex;
    flex-direction: column;
    background: #E7816B;
    text-align: center;
    color: white;
    align-items: center;
    overflow: hidden;
    position: relative;
    .desktopHero{
        display: none;
    }
    
    form{
        display: flex;
        flex-direction: column;
        width: 90%;
        z-index: 10;
        input,textarea{
            background: transparent;
            border: none;
            border-bottom: 1px solid #F1F3F5;
            padding: 10px;
            color: white;
            
            :focus{
                outline: none;
                
            }
            ::placeholder{
                color: rgba(241, 243, 245, 0.5);
                opacity: 1;
            }
        }
        button{
            margin: 20px auto 40px auto;
        }
    }
    .formDescription{
        z-index: 10;
        width: 90%;
        h1{
            margin-top: 2em;
            margin-bottom: 1em;
        }
        p{
            font-weight: lighter;
            margin-bottom: 2.5em;
        }
    }
    @media(min-width: 768px){
        width: 90%;
        margin-left: 5%;
        border-radius: 10px;
        .formDescription{
            text-align: left;
        }
        form{
            button{
                margin-left: auto;
                margin-right: 0;
            }
        }
    }
    @media(min-width: 1024px){
        flex-direction: row;
        justify-content: space-evenly;
        height: 480px;
        width: 80%;
        margin-left: 10%;
        .desktopHero{
            display: block;
            transform: translateX(-50%);
        }
        .mobileHero{
            display: none;
        }
        .formDescription{
            width: 30%;
            margin: auto;
            h1{
                margin-top: 0;
            }
        }
        form{
            width: 40%;
            margin: auto;
        }
    }

`

export{ Headline, HeaderStyle, HeaderLogo, Button, ProjectWrapper, QualitiesWrapper, DesignHeader, WebprojectsWrapper, ContactForm,
    HomeWrapper, QualitiesContainer, Paragraph, ProjectContainer, FooterStyle, LocationWrapper, AboutContainer} 