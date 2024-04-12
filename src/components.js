import './App.css'


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
function Button({value}){
    return <button className="btn">{value}</button>
}

export {NavBtn,SubHead,H1,Heading,SupTxt,BodyTxt,Button}