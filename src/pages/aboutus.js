import { BodyTxt, Heading } from "./components";
import eat from "../images/eat.jpg"
import udsa from "../images/udsa.jpg"
import sus from "../images/sustainability.JPG"

function Moto({source,txt}){
    return(
        <>
        <div className="moto">
            <section><img src={source} alt='img' className="moto-img"></img></section>
            <section className="moto-txt"><BodyTxt value={txt}/></section>
        </div>
        </>

    )
}

function MotoInvert({source,txt}){
    return(
        <>
        <div className="moto">
            <section className="moto-txt"><BodyTxt value={txt}/></section>
            <section><img src={source} alt='img' className="moto-img"></img></section>
        </div>
        </>

    )
}


export default function AboutUs(){
    return(
        <>
        <section className="about-sec">
            <div className="subtitle-txt">
                <Heading value="How is our products"/>
            </div>
            <div className="sec-items">
                <Moto source={eat} txt='"Fuel your body with our nutrient-packed meal kits, 
                promoting a wholesome and delicious approach to healthy eating."'/>
                <MotoInvert source={udsa} txt='"Celebrate the richness of organic farming with our meal kits, 
                delivering a curated selection of responsibly grown produce for a wholesome and flavorful dining experience."'/>
                <Moto source={sus} txt='"Choose a meal kit that aligns with your values of sustainability; 
                ours features ingredients and practices that prioritize the health of the planet as much as your well-being."'/>
            </div>
        </section>
        </>
    )
}