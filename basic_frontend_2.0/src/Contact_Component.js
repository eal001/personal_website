import "./Contact_Component.css";
import React, {useState} from "react";
import emailjs from "emailjs-com";
import Typist from "react-typist";
import LinkedIn from "./images/LinkedIn_logo.png";
import GitHub from "./images/GitHub_logo.png";
import DevPost from "./images/Devpost_logo_cropped.png";
import Instagram  from "./images/Instagram_logo.png";
import RESUME from "./files/Elliot Lee - Resume.pdf";
require("dotenv");

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;
const TIMEOUT = 1000;
const CURSOR = {
    show: true,
    blink: true,
    element: "_",
    hideWhenDone: true,
    hideWhenDoneDelay: TIMEOUT*1.44
};

const Email_Box = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleMsgChange = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log("name: " + name);
        console.log("email: " + email);
        console.log("message: " + message);
        
        const details = {
            from_name: name,
            from_email: email,
            message: message
        }

        //commented out for the time being
        emailjs.send(SERVICE_ID, TEMPLATE_ID, details, USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        
        console.log("submitted email");

        console.log(document.getElementsByClassName("name_field")[0].value)
    }

    return (
        <div className="email_box_background">
            <div className="email_box">
                <input className="text_input name_field " type="text" placeholder="Enter Name Here" value={name} onChange={handleNameChange}></input>
                <input className="text_input email_field" type="text" placeholder="Enter Email Here" value={email} onChange={handleEmailChange}></input>
                <textarea className="text_input message_field" type="text" placeholder="Enter Message Here" value={message} onChange={handleMsgChange}></textarea>
                <div></div>
                <button className="submit_button" onClick={handleSubmit}>
                    Submit
                    <div className="button_border top3"></div>    
                    <div className="button_border right3"></div>  
                    <div className="button_border bot3"></div>  
                    <div className="button_border left3"></div>  
                </ button>
            </ div>
        </ div>
    )
}

const Link_Box = () => {

    return(
        <div className="link_box">
            <a className="social_link" href="https://www.linkedin.com/in/eal001/">
                <img className="link_image" alt="LinkedIn" src={LinkedIn}></img>    
                <div className="link_filter"></div>
            </ a>
            <a className="social_link" href="https://github.com/eal001/">
                <img className="link_image" alt="GitHub" src={GitHub}></img> 
                <div className="link_filter"></div>   
            </ a>
            <a className="social_link" href="https://devpost.com/eal001">
                <img className="link_image" alt="Devpost" src={DevPost}></img>
                <div className="link_filter"></div>
            </ a>
            <a className="social_link" href="https://www.instagram.com/eal001/">
                <img className="link_image" alt="Instagram" src={Instagram}></img>
                <div className="link_filter"></div>
            </a>
        </div>
    )
}

const Resume_Box = () => {

    const [isOpen, setOpen] = useState(false);
    const [buttonText, setText] = useState("View Resume");

    const handleView = () => {
        
        const resume_view = document.getElementById("resume");
        const toggle_button = document.getElementById("view_button");
        if(isOpen) {
            resume_view.style.border = "none";
            resume_view.style.height = "0px";
            setText("View Resume");
        } else { // not open 
            resume_view.style.border = "2px solid lime";
            resume_view.style.height = "90vh";
            setText("Hide Resume");
        }
        setOpen( !isOpen );
    }

    //console.log(RESUME)
    return ( 
        <div className="resume_box">
            <button id="view_button" onClick={handleView}>
                {buttonText}
                <div className="button_border top"></ div>
                <div className="button_border right"></ div>
                <div className="button_border bot"></ div>
                <div className="button_border left"></ div>
            </button>
            <embed id="resume" scrolling="auto" src={RESUME}/>
            {/* <a className="download_link" href={RESUME} download>Download Resume</a> */}
        </div>
    )
}

const Credits_Section = () => {
    return (
        <div className="credit_section">
            <p>Elliot Lee © 2021</p>
            <br />
            <p>All credit for artwork, photos, and logos go to the original creator</p>
            <div>Icons made by <a className="art_credit_link" href="https://smashicons.com/" title="Smashicons">Smashicons</a> from <a className="art_credit_link" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <div>Font made by <a className="art_credit_link" href="https://www.fontspace.com/wynford-font-f45789">Fontkong on fontspace.com</a></div>
            <div>BiasML art made by <a className="art_credit_link" href="https://github.com/shantellemeganserafin">Shantelle Serafin</a></ div>
            <div>RateMyLease art made by <a className="art_credit_link" href="https://github.com/jiuchoe4">Jiu Choe</a></div>
        </div>
    )
}

const Contact_Component = () => {
    return (
        <div id="contact" className="contact_component">
            <h1 className="contact_section_title">Let's Get in Touch !</h1>
            <p className="contact_description">
                <Typist  avgTypingDelay={40} cursor={CURSOR}>
                    I would love to work together and answer any questions you might have!
                </ Typist>
            </p>
            <Email_Box />
            <Link_Box />
            <Resume_Box />
            <Credits_Section />
        </div>
    )
}
export default Contact_Component;