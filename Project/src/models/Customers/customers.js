import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Customers()
{
    const storeData = useSelector(state => state);

    const dispatch = useDispatch();

    const [products,setProducts]= useState([]);
    const [purchases,setPurchases]= useState([]);
    const [add,setAdd]= useState(false);
    const [id,setId]= useState(0);
    const [list,setList]= useState([]);

    useEffect(()=>
    {
        setProducts(storeData[0][1]);
        setPurchases(storeData[0][2]);

    },[storeData]);

    const addProducts= ()=>
    {
        dispatch({type : "addPurchase" , payload : [id,list]});

        setAdd(false);
        setList([]);  
    }

    return(<div>

        <div style={{float: "left", width: "60%"}}>

            <h2> Customers Table:</h2>

            <Link to="addCustomer"><input type="button" value="Add Customer" style={{cursor: "pointer"}}/></Link><br/><br/>

            <table border="1" style={{width: "80%", textAlign: "center"}}>
            
            <th>Name</th>
            <th>Purchased Products</th>
            <th>Purchased Date</th>
            <th> Buy</th>

            {
                storeData[0][0].map((item,index)=>
                {
                    return <tr key={index}>

                        <td>{item.Fname} {item.Lname} </td>
                        
                        <td>
                        {purchases.length>0 ?
                            
                            <>{
                                purchases.map((x,i)=>
                                {
                                    return <ul> {x.CustomerID==item.ID ?
                                            
                                        <li key={i}>
                                            
                                            <Link to={"/products/editProduct/"+ x.ProductID}>{products.find(z=> z.ID==x.ProductID).Name} </Link>

                                        </li> : null
                                    } </ul>
                                })
                            }</> : <>X</>
                        }</td>

                        <td>
                        {purchases.length>0 ?

                            <>{
                                purchases.map((x,i)=>
                                {
                                    return <ul> {x.CustomerID==item.ID ?
                                            
                                        <li key={i}>{x.Date} </li> : null

                                    } </ul>
                                })
                            }</> : <>X</>
                        }</td>
                        
                        <td><input type="button" onClick={()=> (setAdd(true),setId(item.ID))} value="Buy Products" style={{cursor: "pointer"}}/></td>
                    
                    </tr>
                })
            }</table>
        </div>
   
        {add==true ?

            <div style={{float: "right", width: "40%", textAlign: "left"}}>
                
                <h3> Customer: {storeData[0][0].find(z=> z.ID==id).Fname} {storeData[0][0].find(z=> z.ID==id).Lname}</h3>
 
                {
                    products.map((item,index)=>
                    {
                        return <div key={index}><input type="checkbox" value={item.ID} onChange={e=> setList([...list, e.target.value])}/>{item.Name}<br/></div>
                    })
                }<br/>

                <input type="button" value="Buy" onClick={addProducts} style={{cursor: "pointer"}}/><br/>

            </div> : null
        }

    </div>)
}

export default Customers;