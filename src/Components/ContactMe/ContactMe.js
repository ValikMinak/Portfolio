import React from 'react';
import {ContactMeStyled} from "../../Styled/ContactMeStyled";


const ContactMe = () => {
    return (
        <ContactMeStyled>
            <div className="contact__title">
                <h3>Valentyn Minakow</h3>
                <span>T. 068-588-49-68</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, asperiores aspernatur at, et
                    facere id laboriosam nemo nostrum sequi sit sunt temporibus! Aliquam aliquid asperiores blanditiis
                    consequatur, culpa debitis dolor dolorum et eveniet expedita explicabo fugiat id illo laboriosam
                    laudantium magni molestiae nam natus nemo neque nesciunt, nihil odio officiis perferendis
                    praesentium quaerat quasi quisquam rem reprehenderit similique tenetur ullam vero voluptas voluptate
                    voluptatem voluptatibus, voluptatum. Animi aspernatur beatae commodi corporis culpa, cumque debitis
                    delectus dicta dolor dolore ex iste laudantium magnam maxime minima nisi quae quisquam, tempore vel,
                    veritatis. Deserunt fugit odio quia suscipit. Iusto mollitia officia rerum vero.</p>
            </div>
            <div className="contact__image">
                <img style={{transform: "rotate(4deg)"}} src="/photo-1.png" alt=""/>
            </div>
        </ContactMeStyled>
    );
};

export default ContactMe;
