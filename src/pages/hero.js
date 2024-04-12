import hero from '../images/hero-img.jpg'

export default function Hero(){
    return(
        <>
        <section className=" hero-sec" id="HOME">
            <img src={hero} className="hero-img1" alt='background '></img>
            <div className="hero-txt">
            <p className='heading hero-txt1'>Experience the joy of cooking without the hassle.</p>
            <p className= 'bodytxt hero-txt2'>Our meal kits are thoughtfully crafted to streamline your kitchen time, 
                with pre-measured ingredients and easy-to-follow recipes.'</p>
            <button className="hero-btn">Explore Now</button>
            </div>
        </section>
        </>
    )
}