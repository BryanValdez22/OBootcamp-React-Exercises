import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import ContactComponent from '../pure/contact';


const ContactListComponent = () => {

    const defaultContact = new Contacto('Brayan', 'Valdez Jaraba', 'jaravaldezbryan2016@gmail.com', true)

    return (
        <div>
            <ContactComponent contact={defaultContact}></ContactComponent>    
        </div>
    );
};



export default ContactListComponent;
