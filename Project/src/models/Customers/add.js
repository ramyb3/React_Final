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

    return(<div>

        <h2>Add Customer:</h2>

        <b>Customer First Name:</b> <input type="text" value={customer.Fname}  onChange={e =>setCustomer({...customer, Fname: e.target.value})}/><br/><br/>
        <b>Customer Last Name:</b> <input type="text" value={customer.Lname}  onChange={e =>setCustomer({...customer, Lname: e.target.value})}/><br/><br/>
        <b>Customer City:</b> <input type="text" value={customer.City}  onChange={e =>setCustomer({...customer, City: e.target.value})}/><br/><br/>

        <Link to="/customers"><input type="button" onClick={send} value="Add" style={{cursor: "pointer"}}/></Link>
        <Link to="/customers"><input type="button" value="Cancel" style={{cursor: "pointer"}}/></Link>

    </div>)
}

export default AddProduct;