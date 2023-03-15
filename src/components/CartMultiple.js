import {useEffect, useState} from 'react';
import CartSingle from '../pages/CartSingle';
const CartMultiple = () => {
    const [items, setItems] = useState([
        {id: 0, name: 'Inverter Aircon', price: 20000},
        {id: 1, name: 'Fried Chicken', price: 30000},
        {id: 2, name: 'Nike Airforce 1', price: 80000},
    ]);
    return ( 
        <div>
            {
                items.map((cartItem) => (

                    <div key={cartItem.id}>
                        <CartSingle name={cartItem.name} price={cartItem.price}></CartSingle>
                    </div>

                ))
            }
        </div>
     );
}
 
export default CartMultiple;