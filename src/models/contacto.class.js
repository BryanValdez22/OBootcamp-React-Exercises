import { CONECT } from "./state.conect";

export class Contacto{
    name= '';
    lastname= '';
    email= '';
    conected= CONECT.NOCONECTED;

    constructor(name, lastname, email, conected){
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.conected = conected;
    }

}