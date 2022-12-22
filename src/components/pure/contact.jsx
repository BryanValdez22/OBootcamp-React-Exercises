import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ContactComponent = ({contact}) => {
    return (
        <div>
            <h1>
                Contacts
            </h1>
            <h3>
                Nombre: { contact.name }
            </h3>
            <h3>
                Apellido: { contact.lastname }
            </h3>
            <h3>
                Email: { contact.email }
            </h3>
            <h3>
                Conectado: { contact.conected ? 'CONECTED':'NO CONECTED' }
            </h3>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contacto)
};


export default ContactComponent;
