import Header from "./Header"
import Footer from "./Footer"
import { AboutContainer } from "./StyledComponents"
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { useEffect } from "react"

 
const Location = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [])

    return (
        <>
            <Header/>
            
            
            <AboutContainer>
            <MapContainer id="CanadaMap" style={{height:"320px", width: "100%"}} center={[43.651, -79.34]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                <Marker position={[43.651, -79.34]}>
                
                </Marker>
            </MapContainer>
            <div className="locationDataWrapper">
                <h1 className="locationHeader">Canada</h1>
                <div className="locationData">
                    <h4>Designo Central Office</h4>
                    <p>3886 Wellington Street</p>
                    <p>Toronto, Ontario M9C 3J5</p>
                </div>
                <div className="locationData">
                    <h4>Contact</h4>
                    <p>P: +7682342</p>
                    <p>E: contact@designo.co</p>
                </div>
                </div>
            </AboutContainer>
            <AboutContainer>
            <MapContainer style={{height:"320px", width: "100%"}} center={[-33.11727359925742, 151.63007805905008]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                <Marker position={[-33.11727359925742, 151.63007805905008]}>
                
                </Marker>
            </MapContainer>
                <div className="locationDataWrapper">
                <h1 className="locationHeader">Australia</h1>
                <div className="locationData">
                    <h4>Designo Central Office</h4>
                    <p>3886 Wellington Street</p>
                    <p>Toronto, Ontario M9C 3J5</p>
                </div>
                <div className="locationData">
                    <h4>Contact</h4>
                    <p>P: +7682342</p>
                    <p>E: contact@designo.co</p>
                </div>
                </div>
            </AboutContainer>
            <AboutContainer>
            <MapContainer id="UKMap" style={{height:"320px", width: "100%"}} center={[53.71077028814111, -1.3435888015125845]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                <Marker position={[53.71077028814111, -1.3435888015125845]}>
                
                </Marker>
            </MapContainer>
            <div className="locationDataWrapper">
                <h1 className="locationHeader">United Kingdoms</h1>
                <div className="locationData">
                    <h4>Designo Central Office</h4>
                    <p>3886 Wellington Street</p>
                    <p>Toronto, Ontario M9C 3J5</p>
                </div>
                <div className="locationData">
                    <h4>Contact</h4>
                    <p>P: +7682342</p>
                    <p>E: contact@designo.co</p>
                </div>
                </div>
            </AboutContainer>
            <Footer/>
        </>
    )
}

export default Location
