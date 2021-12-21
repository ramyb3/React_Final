import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Menu()
{
    const dispatch = useDispatch();

    useEffect(() =>
    {
        let customers=[{ID: 1, Fname: "abc", Lname: "def", City: "Ramla"},{ID: 2, Fname: "ghi", Lname: "jkl", City: "TLV"}];
        let products=[{ID: 1, Name: "PC", Price: 2000, Quantity: 1},{ID: 2, Name: "TV", Price: 1000, Quantity: 1}];

        dispatch({type : "LOAD" , payload : [customers,products,[]]});
    },[]);

    return(<div>

        <div style={{textAlign: "center"}}>
            <Link to="products"><input type="button" value="Products" style={{cursor: "pointer"}}/></Link>&nbsp;
            <Link to="customers"><input type="button" value="Customers" style={{cursor: "pointer"}}/></Link>
        </div>

        <Outlet />

    </div>)
}

export default Menu;