import '../App.css'
import { FaPhoneVolume,FaWhatsapp } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import {PiInstagramLogoBold} from "react-icons/pi"
import { AiOutlineFacebook } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";

function NavBtn({value}){
    return <a className="nav-link" href={'#'+value}>{value}</a>;
}
function H1({value}){
    return <p className='h1'>{value}</p>
}
function Heading({value}){
    return <p className='heading'>{value}</p>
}
function SubHead({value}){
    return <p className='subtxt'>{value}</p>
}
function BodyTxt({value}){
    return <p className='bodytxt'>{value}</p>
}
function SupTxt({value}){
    return <p className='suptxt'>{value}</p>
}

function Mealkit( {txt,source}){
    return(
        <>
        <div className='meal-card'>
            <img src={source} className="meal-img" alt={txt+"img"}></img>
            <section className="meal-txt"><SupTxt value={txt}/></section>
        </div>
        </>
    )
}
function Feedback(){
    return(
        <>
        <form  className="form">
            <label for="name">Name:</label>
            <input type="text" name="name" id="name"  required/>
            <label for=" email"> Email:</label>
            <input type="email" name="email" id="email" required/>
            <label for="phone">Phone:</label>
            <input type="tel" name="phone" id="phone"required/>
            <label for="msg"> Message:</label>
            <textarea name="msg" id="msg" cols="30" rows="10" required></textarea>
            <div className="formBtn">
                <button className="subBtn" type="submit">submit</button>
                <button className="clrBtn">clear</button>
            </div>
        </form>
        </>
    )
}

function Phone( {value}){
    return(
        <>
        <div className='phone'>
        <SupTxt value='Phone:'/>
        <div >
            <a className='phone1' href='#'>
            <BodyTxt value={<FaPhoneVolume />}/>
            <BodyTxt value={value}/>
            </a>
        </div>
        </div>
        </>
    )
}
function Mail( {value}){
    return(
        <>
        <div className='phone'>
        <SupTxt value='Mail Us:'/>
        <div >
            <a className='phone1'href='#'>
            <BodyTxt value={<IoMdMail />}/>
            <BodyTxt value={value}/>
            </a>
        </div>
        </div>
        </>
    )
}

function SocialMedia(){
    return(
        <>
        <div className='social-media'>
            <SupTxt value="Join us on:"/>
            <div className='media-icons' >
                <a href='#'><SubHead value={<PiInstagramLogoBold />}/></a>
                <a href='#'><SubHead value={<FaWhatsapp />}/></a>
                <a href='#'><SubHead value={<AiOutlineFacebook />}/></a>
                <a href='#'><SubHead value={<BsTwitterX />}/></a>
            </div>
        </div>
        </>
    )
}

export {NavBtn,SubHead,H1,Heading,SupTxt,BodyTxt,Mealkit,Feedback,Phone,Mail,SocialMedia}