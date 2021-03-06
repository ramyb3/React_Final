import { useState } from 'react';
import {  useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'

function AddProduct()
{
    const dispatch = useDispatch();

    const [customer,setCustomer]= useState({ID: 0, Fname: '', Lname: '', City: ''});

    const send = ()=>
    {
        if(customer.Fname=='' || customer.Lname=='' || customer.City=='')
        alert("YOU NEED TO FILL ALL THE FORM!!");

        else
        dispatch({type : "addCustomer", payload : customer }); 
    }

    return(<div style={{textAlign: 'center'}}>

        <h2>Add Customer:</h2>

        <input type="text" placeholder='First Name' onChange={e =>setCustomer({...customer, Fname: e.target.value})}/><br/><br/>
        <input type="text" placeholder='Last Name' onChange={e =>setCustomer({...customer, Lname: e.target.value})}/><br/><br/>
        <input type="text" placeholder='City' onChange={e =>setCustomer({...customer, City: e.target.value})}/><br/><br/>

        <Link to="/customers"><input type="button" onClick={send} value="Add" className='button'/></Link>
        <Link to="/customers"><input type="button" value="Cancel" className='button'/></Link>

    </div>)
}

export default AddProduct;