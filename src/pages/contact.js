import { Feedback, Heading,Phone,Mail, SubHead, SocialMedia } from "./components"

export default function Contact(){
    return(
        <>
        <section className=" contact-sec">
            <div className="subtitle-txt">
                <Heading value="Contact Us"/>
            </div>
            <div className="feedback">
                <section className="msg">
                    <SubHead value="Leave your comment..!"/>
                    <Feedback/>
                </section>
                <section className="contact">
                    <SubHead value="Customer Care"/>
                    <Phone value="8952472453"/>
                    <Mail value="supportgreenbite@gmail.com"/>
                    <SocialMedia/>
                </section>
            </div>
        </section>
        </>
    )
}