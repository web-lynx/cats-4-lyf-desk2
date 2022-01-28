import React from 'react';
import { useCart } from "react-use-cart"
import CatBox from './CatBox';

const CatCart = () => {
    const { 
        isEmpty,
        totalUniqueItems,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart, 
    } = useCart();
    if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>
    return (
        <section>
        <div>
            <div>
                <h5>Cart ({totalUniqueItems}) Total Items: ({totalItems})</h5>
                <table>
                    <tbody>
                        {CatBox.map((item, index) => {
                            return(
                            <tr key={index}>
                                <td>
                                    <img src={item.img} style={{height: '6rem'}} alt=''/>
                                </td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>Quantity ({item.quantity})</td>
                                <td>
                                    <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id, item.quantity -1)}>-</button>
                                    <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id, item.quantity +1)}>+</button>
                                    <button className='btn btn-danger ms-2' onClick={() => removeItem(item.id)}>Remove Item</button>
                                </td>
                            </tr>
                        )
                   })} 
                   </tbody>
                </table>
            </div>
            <div className='col-auto ms-auto'>
                <h2>Total Price: £{cartTotal}</h2>
            </div>
            <div className='col-auto'>
                <button className='btn btn-danger m-2' onClick={() => emptyCart()}>Clear Cart</button>

            </div>
        </div>
        </section>
    );
};

export default CatCart;