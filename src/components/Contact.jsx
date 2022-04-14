
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

    const onChange = (e)=>setName(e.target.value);

    return <div>
        <AddForm data={name} changeInput={onChange} formSubmit={formSubmit}/>
        <ListForm data={names} />
    </div>
}

const ListForm = (props)=>{
    let names = props.data;
    return <div>
        {names.map((e, i)=><p key={i} >{e}</p>)}
    </div>
}

const AddForm = (props)=>{
    let name = props.data;
    return <div>
    <p>Add new</p>
    <form onSubmit={props.formSubmit}>
        <input type="text" onChange={props.changeInput} value={name}/>
        <input type="submit" value="submit"/>
    </form>
    </div>
}


export default ContactForm;