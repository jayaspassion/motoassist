import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import bg from "./bg.png";
import { WhatsappIcon, EmailIcon, FacebookIcon, TwitterIcon }from "react-share";


const Contact = () => {
    return (
        <div className="home-body">
            <div className="home-header" style={{backgroundImage : `url(${bg})`}}> 
                <h1 className="home-header-text">CONTACT US</h1>
            </div>
            <section className="row" style={{marginTop:"3rem", marginBottom:"3rem"}}>
                <div className="flex-container">
                    <EmailIcon size={40} round />
                    <br/>
                    <p>Write to us at :</p>
                    <p>motoassist@gmail.com</p>
                </div>
                <div className="flex-container">
                    <WhatsappIcon size={40} round />
                    <br/>
                    <p>Call or WhatsApp us now at :</p>
                    <p>+91 99999-99999</p>
                </div>
                <div className="flex-container">
                    <h5>Communication Address</h5>
                    <p>221B, Baker Street</p>
                    <p>London</p>
                </div>
            </section>
            <div className="home-footer row"> 
                <div className="col-md-3.5">
                    <p style={{fontSize: "2rem"}}>Social Connect</p>
                </div>
                <div className="col-md-3">
                    <TwitterIcon size={40} round />
                    <p>www.twitter.com/motoassist</p>
                </div>
                <div className="col-md-3">
                    <WhatsappIcon size={40} round />
                    <p>+91 99999-99999</p>
                </div>
                <div className="col-md-3">
                    <FacebookIcon size={40} round />
                    <p>www.facebook.com/motoassist</p>
                </div>                
            </div>
        </div>
        
)
}

export default Contact ;