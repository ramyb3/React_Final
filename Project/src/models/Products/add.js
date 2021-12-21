import { useState } from 'react';
import {  useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'

function AddProduct()
{
    const dispatch = useDispatch();

    const [product,setProduct]= useState({ID: 0, Name: '', Price: 0, Quantity: 0});

    const send = ()=>
    {
        if(product.Price<1 || product.Quantity<1 || product.Name=='')
        alert("YOU NEED TO FILL ALL THE FORM!!");

        else
        dispatch({type : "addProduct", payload : product }); 
    }

    return(<div>

        <h2>Add Product:</h2>

        <b>Product Name:</b> <input type="text" value={product.Name} onChange={e =>setProduct({...product, Name: e.target.value})}/><br/><br/>
        <b>Product Price:</b> <input type="number" min="1" value={product.Price} onChange={e =>setProduct({...product, Price: parseInt(e.target.value)})}/><br/><br/>
        <b>Product Quantity:</b> <input type="number" min="1" value={product.Quantity} onChange={e =>setProduct({...product, Quantity: parseInt(e.target.value)})}/><br/><br/>

        <Link to="/products"><input type="button" onClick={send} value="Add" style={{cursor: "pointer"}}/></Link>
        <Link to="/products"><input type="button" value="Cancel" style={{cursor: "pointer"}}/></Link>

    </div>)
}

export default AddProduct;