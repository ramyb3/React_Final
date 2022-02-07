import { Route, Routes } from 'react-router-dom';
import MenuComp from './models/menu';
import ProductsComp from './models/Products/products';
import CustomersComp from './models/Customers/customers';
import EditProductComp from './models/Products/edit';
import EditCustomerComp from './models/Customers/edit'
import AddProductComp from './models/Products/add';
import AddCustomerComp from './models/Customers/add';
import './App.css';

function App()
{ 
    return (<div>

        <h1 style={{textAlign: "center"}}>Store Project</h1>

        <Routes>

            <Route path="/" element={<MenuComp/>}>

                <Route path="products" element={<ProductsComp/>}/>
                <Route path="customers" element={<CustomersComp/>}/>

                <Route path="products/editProduct/:id" element={<EditProductComp/>} />
                <Route path="customers/editCustomer/:id" element={<EditCustomerComp/>} />

                <Route path="products/addProduct" element={<AddProductComp/>} />
                <Route path="customers/addCustomer" element={<AddCustomerComp/>} />

            </Route>
        </Routes>
        
    </div>);
}

export default App;
