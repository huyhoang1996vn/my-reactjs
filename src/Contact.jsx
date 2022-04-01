
import { useEffect, useState } from 'react';

const ContactForm = () =>{
    const defaultName = ["steve", "tony", "gerrard"];
    const [names, setNames] = useState(defaultName);
    const [name, setName] = useState("");

    const formSubmit =(e)=>{
        e.preventDefault();
        setNames((preState)=>([...preState, name]));
        setName("");
    }

    return <div>
        <p>Add new</p>
        <form onSubmit={formSubmit}>
            <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name}/>
            <input type="submit" value="submit"/>
        </form>
        {names.map((e, i)=><p key={i} >{e}</p>)}
    </div>
}



export default ContactForm;