import FormContact from "../components/Form";
import { useState,useEffect } from 'react';

const Contact = () => {
    const [data, setData] = useState({});
    const getData = (FormData) => {
        setData(FormData);
    }
   
    return ( 
        <div>
            {data.firstNameInfo} || {data.lastNameInfo}
            <FormContact callback={getData}></FormContact>
            <h1>YOU ARE IN CONTACT US</h1>
        </div>
     );
}
 
export default Contact;