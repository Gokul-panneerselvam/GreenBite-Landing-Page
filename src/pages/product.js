import {Heading, Mealkit, SupTxt ,BodyTxt} from "./components";
import fruit from '../images/fruits.jpg'
import veges from '../images/veges.jpg'
import nuts from '../images/nuts.jpg'
import cereal from '../images/cereals.jpg'
import breakfast from '../images/breakfast.jpg'
import lunch from '../images/lunch.jpg'
import dinner from '../images/dinner.jpg'
import snaks from '../images/snaks.jpg'
import tea from '../images/tea.jpg'
import oil from '../images/oils.jpg'
import chocolate from '../images/chocolate.jpg'


export default function Product(){
    return(
        <>
        <section className="product" id="PRODUCTS">
            <div className="subtitle-txt">
                <Heading value="Pick up your meal kit from vareity of choices"/>
                <SupTxt value='Indulge in Culinary Excellence Delivered to Your Doorstep!'/>
            </div>
            <div className="sec-items">
            <div className='items'>
                <Mealkit txt = " Breakfast" source={breakfast} />
                <Mealkit txt = " Lunch" source={lunch} />
                <Mealkit txt = " Dinner" source={dinner} />
                <Mealkit txt = " Snaks" source={snaks} />
                <Mealkit txt='Fruits' source= {fruit}/>
                <Mealkit txt='vegetables' source= {veges}/>
                <Mealkit txt='Nuts' source= {nuts}/>
                <Mealkit txt='Cereals' source= {cereal}/>
                <Mealkit txt='Tea & Coffee' source= {tea}/>
                <Mealkit txt='Oil' source= {oil}/>
                <Mealkit txt='Chocolate' source= {chocolate}/>
                
            </div>
            <button className="pro-btn"><BodyTxt value="Shop Now"/></button>
            
            </div>
            
        </section>
        
        </>
    )
}