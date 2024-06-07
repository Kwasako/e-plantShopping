import React from "react";
import { useDispatch, useSelector } from "react-redux";


function CartItems(){
    const cartItems = useSelector(state=>state.cart.cartItems)
    const totalAmount = cartItems.reduce((total, item)=>total + item.price * item.quantity, 0)


    return(
        <div className="container">
            <div>{totalAmount && <div>Total Cart Amount: ${totalAmount}</div>} </div>
            {cartItems.map((item, index)=>(
                <div className="row">
                    <div className="col-4">
                        <div key={index} className="box">
                        <div className="cart-item">
                            <div className="plant"><img src={item.imageUrl}/></div>
                            <div>
                                <div className="name">{item.name}</div>
                                <div>${item.price}</div>
                                <div className="quantity-section">
                                    <button> - </button>
                                    <span> {item.quantity} </span>
                                    <button> + </button>
                                </div>
                                <div className="price">${item.price * item.quantity}</div>
                                <button className="delete-btn"> Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div> 
            ))}
            <button className="clear-btn"> Clear </button>
        </div>
    )
}

export default CartItems