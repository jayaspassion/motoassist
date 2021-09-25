import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import brandlogo_1_Honda from "./logos/brandlogo_1_Honda.png";
import brandlogo_2_RE from "./logos/brandlogo_2_RE.png";
import brandlogo_3_Suziki from "./logos/brandlogo_3_Suziki.png";
import brandlogo_6_TVS from "./logos/brandlogo_6_TVS.png";
import brandlogo_7_Yamaha from "./logos/brandlogo_7_Yamaha.png";
import bg from "./bg.png";
import { WhatsappIcon, EmailIcon, FacebookIcon} from "react-share";


const Home = () => {
    return (
        <div className="home-body">
            <div className="home-header" style={{backgroundImage : `url(${bg})`}}> 
                <h1 className="home-header-text">WELCOME TO MOTOASSIST</h1>
            </div>
            <section className="row" style={{marginTop:"3rem", marginBottom:"3rem"}}>
                <div className="flex-container">
                    <h5>STEP 1: SIGNUP/LOGIN</h5>
                    <p>Please signup to make use of our services! Login if your are an existing user.</p>
                </div>
                <div className="flex-container">
                    <h5>STEP 2: BOOKING</h5>
                    <p>Schedule the booking for the bike service in a single step!</p>
                </div>
                <div className="flex-container">
                    <h5>STEP 3: SERVICE</h5>
                    <p>Our mechanic will arrive at the time and place scheduled to pickup and service your bike!</p>
                </div>
            </section>
            <section >
                <div>
                    <h5>BRANDS WE SERVICE</h5>
                    <img src={brandlogo_1_Honda} alt="Honda"></img>
                    <img src={brandlogo_2_RE} alt="RE"></img>
                    <img src={brandlogo_3_Suziki} alt="Suziki"></img>
                    <img src={brandlogo_6_TVS} alt="TVS"></img>
                    <img src={brandlogo_7_Yamaha} alt="Yamaha"></img>
                </div>
            </section>
            <div className="home-footer row"> 
                <div className="col-md-3.5">
                    <p style={{fontSize: "2rem"}}>Contact Us : </p>
                </div>
                <div className="col-md-3">
                    <EmailIcon size={40} round />
                    <p>motoassist@gmail.com</p>
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

export default Home ;