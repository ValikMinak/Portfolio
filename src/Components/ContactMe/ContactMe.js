import React from 'react';
import {ContactMeStyled} from "../../Styled/ContactMeStyled";
import {Link} from "react-router-dom";


const ContactMe = () => {
    return (
        <ContactMeStyled>
            <div className="contact__title">
                <Link to={"/contacts"} >Location: relocate/remote </Link>
                <Link to={"/contacts"}>Phone: 068-588-49-68</Link>
                <a href={"mailto:valikminak@gmail.com"}>e-mail</a>
                <a target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/valikminak/"}>instagram</a>
                <a target="_blank" rel="noopener noreferrer" href={"https://github.com/ValikMinak"}>github</a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/valikminak/">linkedIn</a>
            </div>
            <div className="contact__image">
                <img style={{transform: "rotate(4deg)"}} src="/photo-1.png" alt=""/>
            </div>
        </ContactMeStyled>
    );
};

export default ContactMe;
