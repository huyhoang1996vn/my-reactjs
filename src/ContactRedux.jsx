
import { useEffect, useState } from 'react';
import {addItemAction} from './action/addItemAction'
import { connect } from 'react-redux';

const ContactRedux = (props) =>{
    // const [names, setNames] = useState(props.data);
    const [name, setName] = useState("");

    const formSubmit =(e)=>{
        e.preventDefault();
        // setNames((preState)=>([...preState, name]));
        props.addItemAction(name);
        setName("");
    }

    const onChange = (e)=>setName(e.target.value);

    return <div>
        <AddForm data={name} changeInput={onChange} formSubmit={formSubmit}/>
        <ListForm data={props.data} />
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
    <p>Add new in Redux</p>
    <form onSubmit={props.formSubmit}>
        <input type="text" onChange={props.changeInput} value={name}/>
        <input type="submit" value="submit"/>
    </form>
    </div>
}


function mapStateToProps(stateRedux) {
        // return stateRedux
        // Add name reducer if have many reducer
        return stateRedux.addItemReducer
    }

const mapDispatchToProps = {
    addItemAction
}  


export default connect(mapStateToProps, mapDispatchToProps)(ContactRedux);