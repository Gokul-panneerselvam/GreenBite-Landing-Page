import { NavBtn,SupTxt } from "./components";
import { GrMenu } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function NavMenu(){
    return(
        <>
        <NavBtn value= 'HOME' />
        <NavBtn value= 'PRODUCTS' />
        <NavBtn value= 'ABOUT US' />
        <NavBtn value= 'TESTIMONALS' />
        <NavBtn value= 'CONTACT' />
        </>
    )
}

function Button({value}){
    return <button className="nav-btn">{value}</button>;
}
function Close({menuOff}){
    return (
        <button onClick={menuOff} className="menu-btn"><IoClose/></button>
    );
}
function Menu({menuOn}){
    return (
        <button onClick={menuOn} className="menu-btn"><GrMenu/></button>
    );
}
function MenuBar({menuOff}){
    return(
        <>
        <aside className="side-bar">
            <div className="row sb-1">
                <SupTxt value='Menu'/>
                <Close menuOff={menuOff}/>
            </div>
            <div className="column sb-2">
                <NavMenu/>
            </div>
        </aside>
        </>
    )


}
 export default function Header(){
    const[isMenu,setIsMenu] = useState(false);

    function on(){
        setIsMenu(true);
    }
    function off(){
        setIsMenu(false);
    }

    return(
        <>
        <header className="nav-bar" >
            <div className=" nav-tgl">
            {isMenu ? <MenuBar menuOff={off}/> : < Menu menuOn={on} />}
            </div>
            <p className="logo">GREENBITE</p>
            <div className="nav-right">
                <div className="nav-menu">
                    <NavMenu/>
                </div>
                <Button value="SignUp"/>   
            </div>
        </header>
        
        </>
    );
}